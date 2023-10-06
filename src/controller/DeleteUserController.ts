import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response){
    const {delete} = req.body
    console.log()
  }
}

export { DeleteUserController };
