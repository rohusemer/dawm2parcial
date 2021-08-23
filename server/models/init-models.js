var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");
var _cuenta = require("./cuenta");
var _registros = require("./registros");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var cuenta = _cuenta(sequelize, DataTypes);
  var registros = _registros(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  cuenta.belongsTo(clientes, { as: "cliente", foreignKey: "clienteId"});
  clientes.hasMany(cuenta, { as: "cuenta", foreignKey: "clienteId"});
  registros.belongsTo(clientes, { as: "cliente", foreignKey: "clienteid"});
  clientes.hasMany(registros, { as: "registros", foreignKey: "clienteid"});
  usuarios.belongsTo(clientes, { as: "cliente", foreignKey: "clienteID"});
  clientes.hasMany(usuarios, { as: "usuarios", foreignKey: "clienteID"});
  registros.belongsTo(cuenta, { as: "cuentum", foreignKey: "cuentaid"});
  cuenta.hasMany(registros, { as: "registros", foreignKey: "cuentaid"});

  return {
    clientes,
    cuenta,
    registros,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
