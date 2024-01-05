import { catchAsync } from "../../common/errors/catchAsync.js";
//import { AppError } from "../../common/errors/appError.js";
import { validateCreateRepair } from "./orders.schema.js";
import { OrdesService } from "./orders.service.js";

export const findAllOrdes = async (req, res) => {
  try {
    const Ordesi = await OrdesService.findAll();

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
  const { mealid, userid, totalPrice, quantity } = req.body;
  const { hasError, errorMessages } = validateCreateRepair({
    mealid,
    userid,
    totalPrice,
    quantity,
  });

  if (hasError) {
    return res.status(422).json({
      status: "error",
      message: errorMessages,
    });
  }

  const repair = await OrdesService.create({
    mealid,
    userid,
    totalPrice,
    quantity,
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
    const ordesUpdated = await OrdesService.update(repair);
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

  await OrdesService.delete(repair);

  return res.status(204).json(null);
});
