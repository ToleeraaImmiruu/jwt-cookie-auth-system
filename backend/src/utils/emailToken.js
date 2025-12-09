
import jwt from "jsonwebtoken";

export const generateEmailToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.EMAIL_SECRET || "emailsecret123",
    { expiresIn: "1d" }
  );
};
