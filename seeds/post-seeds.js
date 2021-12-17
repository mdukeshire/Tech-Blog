const { Post } = require('../models');

const postdata = [
    {
        title: 'First Post!',
        content: 'I am so excited to make my first post on this tech blog!',
        user_id: 1
    },
    {
        title: 'JavaScript Question',
        content: 'HELP! How do you get the red squiggly lines to go away?',
        user_id: 1
    },
    {
        title: 'CSS Help',
        content: 'I am not finding the color I want. Are we sure this thing has all of them?',
        user_id: 2
    },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;