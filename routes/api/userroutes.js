const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        const userInfo = await User.findOne({ where: { email: req.body.email } });
        console.log(req.body);
        if(!userInfo) {
            res.status(400).json({ message: 'Incorrect email or password, please try again'});
            return;
        }
        console.log('pass userInfo');
        const validPassword = await userInfo.checkPassword(req.body.password);
        console.log(validPassword);
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        // Create session variables based on the logged in user
        req.session.save(() => {
          req.session.user_id = userInfo.id;
          req.session.logged_in = true;
          
          res.json({ user: userInfo, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
  try{
    const userData = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password
    })
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  module.exports = router;