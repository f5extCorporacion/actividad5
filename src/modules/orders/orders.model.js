import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database/database.js";

const OrdesModel = sequelize.define("ordes", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  mealid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "mealid",
  },
  userid: {
    type: DataTypes.INTEGER,
    field: "userid",
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: " totalprice",
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM("active", "cancelled", "complete"),
    defaultValue: "active",
    allowNull: false,
  },
});

export default OrdesModel;
