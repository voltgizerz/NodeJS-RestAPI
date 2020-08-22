const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

//Create
exports.create = (req, res) => {
    //VALIDATE REQUEST
    if (!req.body.title) {
        res.status(400).send({
            message: "Contetnt cant be empty!"
        });
        return;
    }

    //CRETE POST
    const post = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    Post.create(post).then((data) => {
        res.send(Data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while create the Post "
        });
    });
}

// Retrieve all
exports.findAll = (req, res) => {

}

// FIND A SINGLE
exports.findOne = (req, res) => {


}

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