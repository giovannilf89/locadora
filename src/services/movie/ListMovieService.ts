import prismaClient from "../../prisma";

class ListMovieService {
  async execute() {
    const movie = await prismaClient.movie.findMany({});

    return movie;
  }
}

export { ListMovieService };
