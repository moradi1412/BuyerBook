const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {} 

// create fields/columns for Post model
Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pages: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false
      },
      book_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      img_link: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'Book'
    }
  );


  module.exports = Book;