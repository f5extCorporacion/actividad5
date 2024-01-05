import express from "express";
import {
  createOrdes,
  deleteOrdes,
  findAllOrdes,
  findOneOrdes,
  updateOrdes,
} from "./orders.controller.js";
import { validExistOrders } from "./orders.middleware.js";
import { protect, restrictTo } from "../users/user.middleware.js";
export const router = express.Router();

router.use(protect);
//Rutas que get de los datos sin parametro y Post
router.route("/").get(restrictTo("admin"), findAllOrdes).post(createOrdes);
//Routas que permiten crear consultar datos con parametros
/* Get ,patch , delete*/
router
  .route("/:id")
  .get(validExistOrders, restrictTo("admin"), findOneOrdes)
  .patch(validExistOrders, restrictTo("admin"), updateOrdes)
  .delete(validExistOrders, restrictTo("admin"), deleteOrdes);
