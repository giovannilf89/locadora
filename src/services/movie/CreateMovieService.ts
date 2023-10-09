import prismaClient from "../../prisma";

interface CreateMovie {
  name: string;
  duration: string;
  director: string;
  genre: string;
}

class CreateMovieService {
  async execute({ name, duration, director, genre }: CreateMovie) {
    const movie = await prismaClient.movie.create({
      data: {
        m_name: name,
        m_duration: duration,
        m_director: director,
        genreId: genre,
      },
      select: {
        m_id: true,
        m_name: true,
        m_duration: true,
        m_director: true,
        genreId: true,
      },
    });
    return { data: "Filme cadastrado com sucesso" };
  }
}

export { CreateMovieService };
