'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('registros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clienteid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
            model: 'clientes',
            key: 'id'
        }
       },
      cuentaid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
            model: 'cuenta',
            key: 'id'
        }
      },
      tipo: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.INTEGER
      },
      fecha: {
        allowNull: false,
        type: Sequelize.DATE
       },
      categoria: {
        allowNull: false,
        type: Sequelize.DATE
       },
      descripcion: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('registros')
  }
};
