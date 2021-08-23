const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registros', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clienteid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
    cuentaid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cuenta',
        key: 'id'
      }
    },
    tipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    monto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    categira: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'registros',
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
      {
        name: "cliente_id_idx",
        using: "BTREE",
        fields: [
          { name: "clienteid" },
        ]
      },
      {
        name: "cuenat_id_idx",
        using: "BTREE",
        fields: [
          { name: "cuentaid" },
        ]
      },
    ]
  });
};
