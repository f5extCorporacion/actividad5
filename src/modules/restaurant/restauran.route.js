import express from "express";
export const router = express.Router();
import {
  createRestaurant,
  createReview,
  deleteReview,
  patchReviews,
} from "./restaurant.controller.js";
import {
  protect,
  protectAccountOwner,
  validExistUser,
} from "./../users/user.middleware.js";

import { ValidExistRestaurant } from "./restauran.middleware.js";
router.use(protect);
router.route("/").post(createRestaurant);
router.post("/reviews/:id", ValidExistRestaurant, createReview);
router.route("/reviews/:id", ValidExistRestaurant);

router
  .route("/reviews/:restaurant/:id")
  .delete(protectAccountOwner, deleteReview)
  .patch(protectAccountOwner, patchReviews);
