import restaurantModel from "./restauran.model.js";
import reviewstModel from "./reviews.model.js";

export class RestaurantService {
  //metodos de clase
  static async NewRestaurante(data) {
    return restaurantModel.create(data);
  }
  static async findOneRestaurant(id) {
    return await restaurantModel.findOne({
      where: {
        id: id,
        status: true,
      },
    });
  }

  static async deleteReview(restaurant) {
    return await restaurant.update({ status: "disabled" });
  }
  static async findOneReview(id) {
    return await reviewstModel.findOne({
      where: {
        id: id,
        status: true,
      },
    });
  }
}
