const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

//Create
exports.create = (req, res) => {
    //VALIDATE REQUEST
    if (!req.body.title) {
        res.status(400).send({
            message: "Content cant be empty!"
        });
        return;
    }

    //CREATE POST
    const post = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    Post.create(post).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while create the Post "
        });
    });
}

// Retrieve all
exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;

    Post.findAll({
        where: condition
    }).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "some error occured while find post"
        });
    });
};

// FIND A SINGLE
exports.findOne = (req, res) => {
    const id = req.params.id;

    Post.findByPk(id).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.tataus(500).send({
            message:"Error Retrieving post with id="+id
        });
    });

};

// UPDATE POST WITH ID
exports.update = (req, res) => {

}

//DELETE
exports.delete = (req, res) => {

}

//DELETE ALL POSTS
exports.deleteAll = (req, res) => {

}

//FIND ALL PUBLISHED
exports.findAllPublished = (req, res) => {

}