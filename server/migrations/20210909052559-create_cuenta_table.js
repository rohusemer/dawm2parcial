'use strict';

let tableModel = { tableName: 'cuenta' };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      // 1. Create table
      await queryInterface.createTable(tableModel, {  

        id:               {   autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
        clienteId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'clientes',
            key: 'id'
          }
        },
        tipo: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        monto: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        fecha: {
          type: Sequelize.DATE,
          allowNull: true
        }


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