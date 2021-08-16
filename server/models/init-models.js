var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");
var _sequelizemeta = require("./sequelizemeta");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);


  return {
    clientes,
    sequelizemeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
