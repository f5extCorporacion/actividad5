import User from "../users/users.model.js";
import MealModel from "./meals.model.js";
export class MealService {
  static async findOne(id, status = "active") {
    return await MealModel.findOne({
      where: {
        id,
        status: status,
      },
    });
  }

  static async findAll() {
    return await MealModel.findAll({
      where: {
        status: ["active", "completed"],
      },
      include: [
        {
          model: User,
        },
      ],
    });
  }

  static async create(data) {
    return await MealModel.create(data);
  }

  static async update(meal, data) {
    return await meal.update(data);
  }

  static async delete(meal) {
    return await meal.update({ status: "cancelled" });
  }
}
