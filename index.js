import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/send-email", (req, res) => {
  const { name, email, insuranceType } = req.body;

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
    subject: "Insurance Quote Request",
    text: `Name: ${name}\nEmail: ${email}\nInsurance Type: ${insuranceType}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ error: error.toString() });
    }
    res.send({ success: true, info });
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
