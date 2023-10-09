import { Request, Response } from "express";
import { CreateMovieService } from "../../services/movie/CreateMovieService";

class CreateMovieController {
  async handle(req: Request, res: Response) {
    const { name, duration, director, genre } = req.body;

    const createMovieService = new CreateMovieService();
    const movie = await createMovieService.execute({
      name,
      duration,
      director,
      genre,
    });
    return res.json(movie);
  }
}

export { CreateMovieController };
