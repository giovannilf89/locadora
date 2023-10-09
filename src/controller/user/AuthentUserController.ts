import { Request, Response } from "express";
import { AuthentUserService } from "../../services/user/AuthentUserService";

class AuthentUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    // console.log(req.body);
    const authentUserService = new AuthentUserService();
    const authent = await authentUserService.execute({
      email,
      password,
    });
    return res.json(authent);
  }
}
export { AuthentUserController };
