// models/events.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connections';

class AppEvent extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public location!: string;
  public address!: string;
  public date!: Date;
  public image!: string;
}

AppEvent.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'AppEvent',
  }
);

export default AppEvent;
