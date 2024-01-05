import { AppError } from "../../common/errors/appError.js";
import { catchAsync } from "../../common/errors/catchAsync.js";
import { OrdesService } from "./orders.service.js";

export const validExistOrders = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await OrdesService.findOne(id, "active");

  if (!repair) {
    return next(new AppError("repair not found", 404));
  }

  req.repair = repair;
  next();
});
