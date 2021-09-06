const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    apellidos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    correro: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    f_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cedula: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'clientes',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
