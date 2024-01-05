import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database/database.js";

const reviewstModel = sequelize.define("reviews", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  userid: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "userid",
  },
  //field: "restaurantid", relacion
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  restaurantid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export default reviewstModel;
