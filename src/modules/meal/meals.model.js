import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database/database.js";

const MealModel = sequelize.define("meal", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  //field: "restautanid", relacion
  restaurantid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "restautanid",
  },

  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export default MealModel;
