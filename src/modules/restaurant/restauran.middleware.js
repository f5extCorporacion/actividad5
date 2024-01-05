import { AppError } from "../../common/errors/appError.js";
import { catchAsync } from "../../common/errors/catchAsync.js";
import { RestaurantService } from "./restaurant.service.js";

export const ValidExistRestaurant = catchAsync(async (req, res, next) => {
  const { id, restaurantid } = req.params;
  let resId = restaurantid || id;
  const respuesta = await RestaurantService.findOneRestaurant(resId);

  if (!respuesta) {
    return next(new AppError(`Restaurant con id : ${id} not found`));
  }
  req.respuesta = respuesta;
  next();
});
