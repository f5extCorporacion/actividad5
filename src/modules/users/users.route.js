import express from "express";
import {
  createUser,
  deleteUser,
  findAllUsers,
  findOneUser,
  updateUser,
  login,
} from "./users.controller.js";
import {
  protect,
  protectAccountOwner,
  validExistUser,
} from "./user.middleware.js";

export const router = express.Router();
//Routas que permiten  Loguear personas
//tambien proteccion de las rutas

router.route("/signup").post(createUser);
router.post("/login", login);
router
  .route("/:id")
  .patch(protectAccountOwner, updateUser)
  .delete(protectAccountOwner, deleteUser);

router.route("/orders").get(protect, findAllUsers);
router.route("/orders/:id").get(validExistUser, findOneUser);
router.use(protect);
