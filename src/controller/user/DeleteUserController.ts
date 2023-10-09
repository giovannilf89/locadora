import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { remove } = req.body;

    const deleteUserService = new DeleteUserService();
    const del = await deleteUserService.execute({
      remove,
    });
    return res.json(del);
  }
}

export { DeleteUserController };
