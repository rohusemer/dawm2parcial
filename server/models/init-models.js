var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");
<<<<<<< HEAD
var _sequelizemeta = require("./sequelizemeta");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);


  return {
    clientes,
    sequelizemeta,
=======
var _cuenta = require("./cuenta");
var _registros = require("./registros");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var cuenta = _cuenta(sequelize, DataTypes);
  var registros = _registros(sequelize, DataTypes);

  cuenta.belongsTo(clientes, { as: "cliente", foreignKey: "clienteId"});
  clientes.hasMany(cuenta, { as: "cuenta", foreignKey: "clienteId"});
  registros.belongsTo(clientes, { as: "cliente", foreignKey: "clienteid"});
  clientes.hasMany(registros, { as: "registros", foreignKey: "clienteid"});
  registros.belongsTo(cuenta, { as: "cuentum", foreignKey: "cuentaid"});
  cuenta.hasMany(registros, { as: "registros", foreignKey: "cuentaid"});

  return {
    clientes,
    cuenta,
    registros,
>>>>>>> f41487eb16c54caf180e60dd3d0804c8a1fd2951
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
