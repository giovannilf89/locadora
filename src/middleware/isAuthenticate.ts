import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authentToken = req.headers.authorization;

  if (!authentToken) {
    return res.status(401).end();
  }

  const [, token] = authentToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
    console.log(sub);
    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
