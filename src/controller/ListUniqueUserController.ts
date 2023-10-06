import { Request, Response } from "express";
import { ListUniqueUserService } from "../services/ListUniqueUserService";

class ListUniqueUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const listUniqueUserService = new ListUniqueUserService();
    const user = await listUniqueUserService.execute({
      id,
    });
    return res.json(user);
  }
}

export { ListUniqueUserController };
