import { DataTypes } from 'sequelize';
import { sequelize } from '../../../config/databases.js';

export const Subjects = sequelize.define(
  'subjects',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_teacher: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'subjects',
  }
);