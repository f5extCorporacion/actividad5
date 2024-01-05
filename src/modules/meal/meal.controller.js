import { catchAsync } from "../../common/errors/catchAsync.js";
//import { AppError } from "../../common/errors/appError.js";
import { validateCreateRepair } from "./orders.schema.js";
import { MealService } from "./meal.service.js";

export const findAllOrdes = async (req, res) => {
  try {
    const Ordesi = await MealService.findAll();

    return res.status(200).json(Ordesi);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};

export const createOrdes = catchAsync(async (req, res) => {
  const { name, price, restaurantid } = req.body;
  const { hasError, errorMessages } = validateCreateRepair({
    name,
    price,
    restaurantid,
  });

  if (hasError) {
    return res.status(422).json({
      status: "error",
      message: errorMessages,
    });
  }

  const repair = await MealService.create({
    name,
    price,
    restaurantid,
  });

  return res.status(201).json(repair);
});

export const findOneOrdes = catchAsync(async (req, res) => {
  const { repair } = req;

  return res.status(200).json(repair);
});

export const updateOrdes = async (req, res) => {
  try {
    const { repair } = req;
    const ordesUpdated = await MealService.update(repair);
    return res.status(200).json(ordesUpdated);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong! 🧨",
    });
  }
};

export const deleteOrdes = catchAsync(async (req, res) => {
  const { repair } = req;

  await MealService.delete(repair);

  return res.status(204).json(null);
});
