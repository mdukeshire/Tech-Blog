const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll();
        const postInfo = postData.map(post => post.get({ plain: true }));

        res.render('homepage', {postInfo, logged_in: req.session.logged_in})
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
      }
    
    res.render('signup');
});

router.get('/post', withAuth, (req, res) => {
    res.render('post')
});

module.exports = router;