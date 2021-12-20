const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req,res) => {
    try{
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        })
        res.status(200).json(newPost);
    } 
    catch(err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req,res) => {
    try {
        console.log(req.params.id)
        console.log(req.session.user_id)
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No posts found'});
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;