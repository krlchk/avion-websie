import express from "express";
import { sendMail } from "../middleware/emailSendler.js";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  try {
    await sendMail(email);
    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
