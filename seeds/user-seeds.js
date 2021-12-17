const { User } = require('../models');

const userdata = [
    {
        username: '1user',
        email: '1user@email.com',
        password: 'password1'
    },
    {
        username: '2user',
        email: '2user@email.com',
        password: 'password2'
    },
];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUser;