import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// cgrfdfdf
// added new path
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/send-email", (req, res) => {
  const { name, email, insuranceType } = req.body;
  const subject = insuranceType
    ? "Insurance Quote Request"
    : "Newsletter Subscription";
  const text = insuranceType
    ? `Name: ${name}\nEmail: ${email}\nInsurance Type: ${insuranceType}`
    : `Email: ${email}\nSubscription to newsletter`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "onlyaddy68@gmail.com",
      pass: "qkto yaph mtui ssag",
    },
  });

  const mailOptions = {
    from: "onlyaddy68@gmail.com",
    to: "20sdeveloper4209@gmail.com",
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ error: error.toString() });
    }
    res.send({ success: true, info });
  });
});
app.post("/contact-us", (req, res) => {
  const { name, email, phone, subject } = req.body;

  // Validate phone number
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.send({ message: "worff" });
  }

  const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nPhone: ${phone}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "onlyaddy68@gmail.com",
      pass: "qkto yaph mtui ssag",
    },
  });

  const mailOptions = {
    from: "onlyaddy68@gmail.com",
    to: "20sdeveloper4209@gmail.com",
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ error: error.toString() });
    }
    res.send({ success: true, info });
  });
});
app.post("/newsletter", (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).send("Please enter a valid email address");
  }

  const text = `Email: ${email}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "onlyaddy68@gmail.com",
      pass: "qkto yaph mtui ssag",
    },
  });

  const mailOptions = {
    from: "onlyaddy68@gmail.com",
    to: "20sdeveloper4209@gmail.com",
    subject: "New newsletter subscription",
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ error: error.toString() });
    }
    res.send({ success: true, info });
  });
});

app.post("/send-phone-call", (req, res) => {
  const { phone } = req.body;
  const subject = "Phone Call Request";
  const text = `Phone Number: ${phone}`;

  sendMail("", "", subject, text, res);
});

// Helper function to send email
function sendMail(name, email, subject, text, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "onlyaddy68@gmail.com",
      pass: "qkto yaph mtui ssag",
    },
  });

  const mailOptions = {
    from: "onlyaddy68@gmail.com",
    to: "20sdeveloper4209@gmail.com",
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ error: error.toString() });
    }
    res.send({ success: true, info });
  });
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Serverrr running on h http://localhost:${port}/`);
});
