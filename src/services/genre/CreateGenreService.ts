import prismaClient from "../../prisma";

interface CreateGenre {
  name: string;
}

class CreateGenreService {
  async execute({ name }: CreateGenre) {
    await prismaClient.genre.create({
      data: {
        g_name: name,
      },
      select: {
        g_id: true,
        g_name: true,
      },
    });
    return { data: "Genero cadastro com sucesso" };
  }
}

export { CreateGenreService };
