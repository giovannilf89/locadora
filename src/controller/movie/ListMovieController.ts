import { Request, Response } from "express";
import { ListMovieService } from "../../services/movie/ListMovieService";

class ListMovieController {
  async handle(req: Request, res: Response) {
    const listMovieService = new ListMovieService();
    const movie = await listMovieService.execute();

    return res.json(movie);
  }
}

export { ListMovieController };
