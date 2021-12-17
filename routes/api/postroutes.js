const router = require('express').Router();
const { Post} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const postInfo = await Post.create({
            post_title: req.body.post_title,
            post_body: req.body.post_body,
            user_id: req.session.user_id
        })
        res.json(postInfo)
    }catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;