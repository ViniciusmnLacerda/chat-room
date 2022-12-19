'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'j.castro',
        email: 'julia@email.com',
        password: '$2b$10$nD5Gv4EpKhXSzQ9QWPR2T.oPnLsHm8XTz3az6kBiykaW2m7S23oi.',
        name: 'Julia',
        last_name: 'Castro',
        image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
        username: 'j.lopes',
        email: 'joão@email.com',
        password: '$2b$10$nD5Gv4EpKhXSzQ9QWPR2T.oPnLsHm8XTz3az6kBiykaW2m7S23oi.',
        name: 'João',
        last_name: 'Lopes',
        image: 'https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80'
      },
      {
        username: 'l.azevedo',
        email: 'lucas@email.com',
        password: '$2b$10$nD5Gv4EpKhXSzQ9QWPR2T.oPnLsHm8XTz3az6kBiykaW2m7S23oi.',
        name: 'Lucas',
        last_name: 'Azevedo',
        image: 'https://images.unsplash.com/photo-1670525975578-4051a7803c38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
      },
      {
        username: 'v.lacerda',
        email: 'vinicius@email.com',
        password: '$2b$10$nD5Gv4EpKhXSzQ9QWPR2T.oPnLsHm8XTz3az6kBiykaW2m7S23oi.',
        name: 'Vinicius',
        last_name: 'Lacerda',
        image: 'https://images.unsplash.com/photo-1669985587439-a2b96062c931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      },
      {
        username: 'm.bragança',
        email: 'marianne@email.com',
        password: '$2b$10$nD5Gv4EpKhXSzQ9QWPR2T.oPnLsHm8XTz3az6kBiykaW2m7S23oi.',
        name: 'Marianne',
        last_name: 'Bragança',
        image: 'https://images.unsplash.com/photo-1670439999166-888c4386d15a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
      },
      {
        username: 'm.zita',
        email: 'zita@email.com',
        password: '$2b$10$nD5Gv4EpKhXSzQ9QWPR2T.oPnLsHm8XTz3az6kBiykaW2m7S23oi.',
        name: 'Maria',
        last_name: 'Zita',
        image: 'https://images.unsplash.com/photo-1669993427100-221137cc7513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80'
      }
    ], { timestamps: false })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
