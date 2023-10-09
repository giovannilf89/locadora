import prismaClient from "../../prisma";

interface ListUser {
  id: string;
}

class ListUniqueUserService {
  async execute({ id }: ListUser) {
    const user = await prismaClient.user.findUnique({
      where: {
        u_id: id,
      },
      select: {
        u_id: true,
        u_name: true,
        u_email: true,
      },
    });
    return user;
  }
}

export { ListUniqueUserService };
