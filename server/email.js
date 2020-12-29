const dotenv = require("dotenv");
dotenv.config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "bogdanslavniy10a@gmail.com",
  from: "sender@example.org",
  templateId: "d-f43daeeaef504760851f727007e0b5d0",
  dynamic_template_data: {
    subject: "Testing Templates",
    name: "Some One",
    city: "Denver",
  },
};
sgMail.send(msg);

module.exports = msg;
