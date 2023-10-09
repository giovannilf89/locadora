import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";

interface AuthentUser {
  email: string;
  password: string;
}

class AuthentUserService {
  async execute({ email, password }: AuthentUser) {
    const user = await prismaClient.user.findFirst({
      where: {
        u_email: email,
      },
    });
    if (!user) {
      throw new Error("Usuario/Senha incorretos");
    }
    const pw = await compare(password, user.u_password);
    if (!pw) {
      throw new Error("Usuario/Senha incorretos");
    }

    const token = sign(
      {
        id: user.u_id,
        email: user.u_email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.u_id,
        expiresIn: "1h",
      }
    );

    return {
      id: user.u_id,
      email: user.u_email,
      token: token,
    };
  }
}

export { AuthentUserService };
