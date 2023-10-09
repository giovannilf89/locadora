import { Request, Response } from "express";
import { CreateUserServices } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    // console.log(name, email, password);

    const createUserServices = new CreateUserServices();
    const users = await createUserServices.execute({
      name,
      email,
      password,
    });
    return res.json(users);
  }
}

export { CreateUserController };
