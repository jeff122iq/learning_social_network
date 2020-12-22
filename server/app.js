const express = require("express");
const config = require("config");
const app = express();
const PORT = config.get("PORT", "./config/default.json");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { User } = require("./db/models");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(PORT);
//Register for
app.post("/register", urlencodedParser, async function (req, res) {
  const email = await User.findOne({ where: { email: req.body.email } });
  if (email) {
    res.status(400).json({ message: "Пользователь уже создан" });
    return;
  }
  const passwordHash = await bcrypt.hash(req.body.password, 12);
  console.log(req.body);
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

console.log("Server start on " + PORT);
