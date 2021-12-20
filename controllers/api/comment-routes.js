const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req,res) => {
    try{
        const newComment = await Comment.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        })
        res.status(200).json(newComment);
    } 
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;