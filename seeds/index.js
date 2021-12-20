const sequelize = require('../config/connection');
const seedUser = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log('database created');
    await seedUser();
    console.log('User Seeded');

    await seedPost();
    console.log('Post Seeded');

    await seedComment();
    console.log('Comment Seeded');
    
    process.exit(0);
}

seedAll();