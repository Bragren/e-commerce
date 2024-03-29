const { INTEGER } = require('sequelize');
const { DECIMAL } = require('sequelize');
const { STRING } = require('sequelize');
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: STRING,
      allowNull: false
    },
    price: {
      type: DECIMAL,
      allowNull: false,
      isDecimal: true
    },
    stock: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 10,
      isNumeric: true
    },
    category_id: {
      type: INTEGER,
      references: {
        model: 'category',
         key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
