import prismaClient from "../../prisma";
interface DeleteUser {
  remove: string;
}

class DeleteUserService {
  async execute({ remove }: DeleteUser) {
    await prismaClient.user.delete({
      where: {
        u_id: remove,
      },
    });
    return { data: "Registro apagado com sucesso" };
  }
}

export { DeleteUserService };
