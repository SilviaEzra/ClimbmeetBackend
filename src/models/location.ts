import { DataTypes, Model } from 'sequelize';
import db from '../db/connections';

class Location extends Model {
  public id!: number;
  public name!: string;
  public latitude!: number;
  public longitude!: number;
}

Location.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Location',
});

export default Location;
