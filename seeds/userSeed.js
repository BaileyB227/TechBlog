const { User } = require('../models');

const userData = [{
        username: 'Allen',
        password: 'password123'

    },
    {
        username: 'Bailey',
        password: 'password123'
    },
    {
        username: 'Sara',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;