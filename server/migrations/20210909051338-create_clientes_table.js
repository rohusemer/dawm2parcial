'use strict';

let tableModel = { tableName: 'clientes' };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      // 1. Create table
      await queryInterface.createTable(tableModel, {
        /*Id:             { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        Created:        { allowNull: false, type: Sequelize.DATE, defaultValue: new Date() },
        Modified:       { allowNull: false, type: Sequelize.DATE, defaultValue: new Date() },
        
        Name:           { allowNull: false, type: Sequelize.STRING },
        Capital:        { allowNull: false, type: Sequelize.STRING },  */    

        id:               {   autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
        nombre:           {   type: Sequelize.STRING(255), allowNull: true},
        apellidos:        {   type: Sequelize.STRING(30), allowNull: true},
        correo:           {   type: Sequelize.STRING(30), allowNull: true},
        fechaNacimiento:  {   type: Sequelize.DATEONLY, allowNull: true},
        cedula:           {   type: Sequelize.STRING(10), allowNull: false},
        usuario:          {   type: Sequelize.STRING(15), allowNull: false},
        passwd:           {   type: Sequelize.STRING(255), allowNull: true}


      });

        

      // 2. Add indices
      await queryInterface.addIndex(tableModel, ['id'], { transaction });
      //await queryInterface.addIndex(tableModel, ['Name'], { transaction });

      // 3. Commit the transaction
      await transaction.commit();

    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableModel);
  }

};