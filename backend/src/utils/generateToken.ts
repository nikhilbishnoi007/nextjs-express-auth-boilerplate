import jwt ,{ SignOptions }from "jsonwebtoken";
import { Response } from "express";

export const generateToken = (res: Response, userId: string): void => {
  const secret = process.env.JWT_SECRET as string;
  const expiresIn = (process.env.JWT_EXPIRES_IN|| "7d")as SignOptions["expiresIn"];

  const token = jwt.sign({ userId }, secret, { expiresIn });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, 
  });
};
