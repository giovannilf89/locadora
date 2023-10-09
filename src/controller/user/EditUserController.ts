import { Request, Response } from "express";
import { EditUserService } from "../../services/user/EditUserService";

class EditUserController {
  async handle(req: Request, res: Response) {
    const { id, editName, editEmail, editPassword } = req.body;
    const editUserService = new EditUserService();
    const edit = await editUserService.execute({
      id,
      editName,
      editEmail,
      editPassword,
    });
    return res.json(edit);
  }
}

export { EditUserController };
