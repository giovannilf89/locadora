import prismaClient from "../prisma";

class ListUserService {
  async execute() {
    const user = await prismaClient.user.findMany({});

    // console.log(user);
    return user;
  }
}
export { ListUserService };
