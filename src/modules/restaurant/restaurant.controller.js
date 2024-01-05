import { catchAsync } from "../../common/errors/catchAsync.js";
import { RestaurantService } from "./restaurant.service.js";

export const createRestaurant = catchAsync(async (req, res, next) => {
  const { name, address, rating } = req.body;
  const newRestaurant = await RestaurantService.NewRestaurante({
    name,
    address,
    rating,
  });
  return await res.status(201).json(newRestaurant);
});
export const createReview = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { comment, rating } = req.body;
  const { sessionUser } = req;
  const review = await RestaurantService.createReview({
    userid: sessionUser.id,
    comment,
    restaurantid: id,
  });

  return res.status(201).json(review);
});
export const deleteReview = catchAsync(async (req, res, next) => {
  try {
    const { restaurant } = req;

    await RestaurantService.deleteReview(restaurant);
    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
});
export const patchReviews = catchAsync(async (req, res, next) => {
  return await res.status(201).json({ mensaje: "ok" });
});
