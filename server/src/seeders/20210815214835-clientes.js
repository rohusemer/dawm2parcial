'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      for (let i = 0; i <10; i++) {
      await queryInterface.bulkInsert('Clientes', [{
          nombre: 'Cliente '+i,
          apellidos: 'Apellido' +i,
          correro: 'prueba@espol.edu.ec',
          salario: 100+i,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
   }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
