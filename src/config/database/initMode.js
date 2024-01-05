import MealModel from "../../modules/meal/meals.model.js";
import OrdesModel from "../../modules/orders/orders.model.js";
import restaurantModel from "../../modules/restaurant/restauran.model.js";
import reviewstModel from "../../modules/restaurant/reviews.model.js";
import User from "../../modules/users/users.model.js";

export const initModel = () => {
  //Se puede colocar la realcion sin ponel tal cual los campos a relacionar
  //Principalmente poner los modelos
  //relacion users y ordes 1 a muchos
  //un usuario puede tener Muchas Ordenes
  User.hasMany(OrdesModel);
  //un usuario puede tener Una Orden
  OrdesModel.belongsTo(User);
  //relacion 1 a muchos
  User.hasMany(reviewstModel);
  reviewstModel.belongsTo(User);
  //Relacion meal y orders
  //relacion 1 a 1
  MealModel.hasOne(OrdesModel);
  OrdesModel.belongsTo(MealModel);
  //Relacion Meals y restaurant
  restaurantModel.hasMany(MealModel);
  MealModel.belongsTo(restaurantModel);

  //restaurant y reviews
  restaurantModel.hasMany(reviewstModel);
  reviewstModel.belongsTo(restaurantModel);
};
