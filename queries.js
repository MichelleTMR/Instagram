const Model = require("./schema.js")

async function createpost(req, res) {
    const post = new Model({
        userid: req.body.userid,
        username:req.body.username,
        image:req.body.image,
        caption:req.body.caption,
        likes:req.body.likes,
        comments:req.body.comments,
        timestamp:Date.now()
    })

    const savePost = await post.save()
    res.status(200).json(savePost)
}


module.exports = {
    createpost
}
