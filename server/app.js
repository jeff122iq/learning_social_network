// ==================== Start Variables ====================
const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const app = express();
const PORT = config.get("PORT", "./config/default.json");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { User } = require("./db/models");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// ==================== End Variables ====================

// ==================== Start Functions ====================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(PORT);
// ==================== End Functions ====================

// ==================== Start Register ====================
app.post("/register", urlencodedParser, async function (req, res) {
  const email = await User.findOne({ where: { email: req.body.email } });
  if (email) {
    res.status(400).json({ message: "Пользователь уже создан" });
    return;
  }
  const passwordHash = await bcrypt.hash(req.body.password, 12);
  console.log(req.body.name);
  let user = User.build({
    name: req.body.name,
    email: req.body.email,
    password: passwordHash,
  });

  user.save();
  res.send(user);
  console.log("\x1b[31m", `REGISTER SUCCES`);

  return;
});
// ==================== End Register ====================

// ==================== Start Login ====================

app.post("/login", urlencodedParser, async function (req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    return res.status(400).json({ message: "Пользователь не найден" });
  }
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Неверный пароль" });
  }

  // Access token generate
  const Accesstoken = jwt.sign(
    { email: user.email, name: user.name },
    config.get("ACCESS_SECRET"),
    {
      expiresIn: "1h",
    }
  );
  res.json({ Accesstoken, email: user.email });
  console.log("\x1b[1m", "\x1b[31m", `LOG-IN SUCCES`, "\x1b[37m");
});

console.log("Server start on " + PORT);

// ==================== End Login ====================
