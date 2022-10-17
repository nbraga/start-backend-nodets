import { DataTypes } from "sequelize";
import { db } from "../database/db";

export const UserModel = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idade: {
    type: DataTypes.INTEGER,
  },
});
