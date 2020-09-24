module.exports = app => {
    const posts = require("../controllers/post.controller.js");

    let router = require("express").Router();

    //create a new post
    router.post("/",posts.create);

    //retrieve all posts
    router.get("/",posts.findAll);

    //retrieve single posts
    router.get("/:id",posts.findOne);

    app.use("/api/posts",router);
}