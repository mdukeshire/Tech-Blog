const { User } = require('../models');

const userdata = [
    {
        username: 'user1',
        email: 'user1@email.com',
        password: 'password1'
    },
    {
        username: 'user2',
        email: 'user2@email.com',
        password: 'password2'
    },
];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUser;