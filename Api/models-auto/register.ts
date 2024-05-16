import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface registerAttributes {
  id: string;
  firstname?: string;
  surname?: string;
  created_date_tz?: Date;
  created_date?: Date;
  luxon_date_tz?: Date;
  luxon_date?: Date;
  javascript_date_tz?: Date;
  javascript_date?: Date;
}

export type registerPk = "id";
export type registerId = register[registerPk];
export type registerOptionalAttributes = "firstname" | "surname" | "created_date_tz" | "created_date" | "luxon_date_tz" | "luxon_date" | "javascript_date_tz" | "javascript_date";
export type registerCreationAttributes = Optional<registerAttributes, registerOptionalAttributes>;

export class register extends Model<registerAttributes, registerCreationAttributes> implements registerAttributes {
  id!: string;
  firstname?: string;
  surname?: string;
  created_date_tz?: Date;
  created_date?: Date;
  luxon_date_tz?: Date;
  luxon_date?: Date;
  javascript_date_tz?: Date;
  javascript_date?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof register {
    return register.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_date_tz: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    luxon_date_tz: {
      type: DataTypes.DATE,
      allowNull: true
    },
    luxon_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    javascript_date_tz: {
      type: DataTypes.DATE,
      allowNull: true
    },
    javascript_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'register',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "register_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
