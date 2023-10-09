import { Router } from "express";
import { CreateGenreController } from "./controller/genre/CreateGenreController";
import { CreateMovieController } from "./controller/movie/CreateMovieController";
import { ListMovieController } from "./controller/movie/ListMovieController";
import { AuthentUserController } from "./controller/user/AuthentUserController";
import { CreateUserController } from "./controller/user/CreateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
import { EditUserController } from "./controller/user/EditUserController";
import { ListUniqueUserController } from "./controller/user/ListUniqueUserController";
import { ListUserController } from "./controller/user/ListUserController";

import { isAuthenticate } from "./middleware/isAuthenticate";

const router = Router();

//User
router.post("/CreateUser", new CreateUserController().handle);
router.get("/ListUsers", isAuthenticate, new ListUserController().handle);
router.get(
  "/ListUniqueUser/:id",
  isAuthenticate,
  new ListUniqueUserController().handle
);
router.delete("/DeleteUser", isAuthenticate, new DeleteUserController().handle);
router.put("/EditUser", isAuthenticate, new EditUserController().handle);
router.post("/AuthentUser", new AuthentUserController().handle);

//Movie
router.post("/CreateMovie", isAuthenticate, new CreateMovieController().handle);
router.get("/ListMovie", isAuthenticate, new ListMovieController().handle);

//Genre
router.post("/CreateGenre", isAuthenticate, new CreateGenreController().handle);
export { router };
