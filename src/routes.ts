import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { DeleteUserController } from "./controller/DeleteUserController";
import { ListUniqueUserController } from "./controller/ListUniqueUserController";
import { ListUserController } from "./controller/ListUserController";

const router = Router();

//Users
router.post("/CreateUser", new CreateUserController().handle);
router.get("/ListUsers", new ListUserController().handle);
router.get("/ListUniqueUser/:id", new ListUniqueUserController().handle);
router.delete("/DeleteUser", new DeleteUserController().handle);
export { router };
