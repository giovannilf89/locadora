import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CreateUser {
  name: string;
  email: string;
  password: string;
}

class CreateUserServices {
  async execute({ name, email, password }: CreateUser) {
    // console.log(name, email, password);
    if (!name || !email || !password) {
      throw new Error("Existem campos em branco");
    }
    const emailAlredyUsed = await prismaClient.user.findFirst({
      where: {
        u_email: email,
      },
    });
    if (emailAlredyUsed) {
      throw new Error("Email ja cadastrado");
    }

    const passCrypt = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        u_name: name,
        u_email: email,
        u_password: passCrypt,
      },
      select: {
        u_id: true,
        u_name: true,
        u_email: true,
      },
    });
    return { dados: "Usuario cadastrado com sucesso" };
  }
}

export { CreateUserServices };
