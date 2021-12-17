const sequelize = require('../config/connection.js');
const userSeed = require('./userInfo');
const postSeed = require('./postData');

const seedData = async () => {
    await sequelize.sync({ force: true });
    await userSeed();
    await postSeed();
    console.log('Finished');
    process.exit(0)
}

seedData()