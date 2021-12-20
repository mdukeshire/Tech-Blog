const router = require('express').Router();
const sequelize = require('sequelize');
const { Post, Comment, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes: [
        [sequelize.fn('date_format', sequelize.col('CREATED_AT'), '%m-%d-%Y'), 'created_at'], 
        'id', 
        'title',
        'content',
      ],
      include: [
        User
      ],      
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [
            User,
          ]
        }
      ]
    });

    const post = dbPostData.get({ plain: true });
    const ownership = (post.user.id == req.session.user_id)

    res.render('post', { post, loggedIn: req.session.loggedIn, ownership });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/new-post/', withAuth, (req,res) => {
  res.render('new-post', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {

  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
