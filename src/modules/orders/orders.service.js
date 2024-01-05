import User from "../users/users.model.js";
import OrdesModel from "./orders.model.js";

export class OrdesService {
  static async findOne(id, status = "active") {
    return await OrdesModel.findOne({
      where: {
        id,
        status: status,
      },
    });
  }

  static async findAll() {
    return await OrdesModel.findAll({
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
    return await OrdesModel.create(data);
  }

  static async update(ordes, data) {
    return await ordes.update(data);
  }

  static async delete(ordes) {
    return await ordes.update({ status: "cancelled" });
  }
}
