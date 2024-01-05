import express from "express";
import { router as usersRoute } from "../modules/users/users.route.js";
import { router as RestaurantRaute } from "./../modules/restaurant/restauran.route.js";
import { router as MealRaute } from "./../modules/meal/meal.route.js";
import { router as OrdersRaute } from "./../modules/orders/orders.route.js";

export const router = express.Router();

//router.use('/repairs', RestaurantRaute)
router.use("/users", usersRoute);
router.use("/restaurant", RestaurantRaute);
router.use("/meal", MealRaute);
router.use("/orders", OrdersRaute);
