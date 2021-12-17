const User = require('./User');
const Post = require('./Posts');

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Post };