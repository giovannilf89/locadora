import { Request, Response } from "express";
import { CreateGenreService } from "../../services/genre/CreateGenreService";

class CreateGenreController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    console.log(req.body);
    const createGenreService = new CreateGenreService();
    const genre = await createGenreService.execute({
      name,
    });
    return res.json(genre);
  }
}
export { CreateGenreController };
