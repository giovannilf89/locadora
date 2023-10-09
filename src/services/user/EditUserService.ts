import prismaClient from "../../prisma";

interface EditUser {
  id: string;
  editName: string;
  editEmail: string;
  editPassword: string;
}

class EditUserService {
  async execute({ id, editName, editEmail, editPassword }: EditUser) {
    await prismaClient.user.update({
      where: {
        u_id: id,
      },
      data: {
        u_name: editName,
        u_email: editEmail,
        u_password: editPassword,
      },
    });
    return { data: "Dados alterados com sucesso" };
  }
}

export { EditUserService };
