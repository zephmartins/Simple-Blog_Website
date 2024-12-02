import express from "express";
const router = express.Router();
import Post from "../model/post.model.js"


router.get("/",  async (req, res) => {

    try {

      const locals = {
        title: "Blog",
        description: "Simple Blog created with NodeJs, Express & MongoDb"
    }
      const data = await Post.find(); // this is to find all the post
      res.render('index', {
        locals,
        data,
      })
    } catch (error) {
      console.log(error)
    }

  

  })
// Ger
// This is to get post by id
  router.get("/post/:id", async (req, res) => {
 
    try {
      const locals = {
        title: "Nodejs Blog",
        description: "Simple Blog created with NodeJs, Express & MongoDb"
    }
  
      let slug = req.params.id;
  
  
  
      const data = await Post.findById({_id: slug})
      res.render("post", {locals, data});
    } catch (error) {
      console.log(error)
    }
  
  
  });

   //Get
  // New Post

  router.get("/add-post",  async (req, res) => {

    try {

      const locals = {
        title: "Add Post",
        description: "Simple Blog created with NodeJs, Express & MongoDb"
    }
      const data = await Post.find();
      res.render('add-post', {
        locals,
        data,
      })
    } catch (error) {
      console.log(error)
    }

  

  })

  // Get
// edit post
router.get("/edit-post/:id",  async (req, res) => {

    try {

      const data = await Post.findById({ _id: req.params.id})
      res.render('edit-post', {
        data,
      })
    } catch (error) {
      console.log(error)
    }

  

  })

  //Post
  // New Post

  router.post("/add-post",  async (req, res) => {

    try {
      try {
        const newPost = new Post({
          title: req.body.title,
          body: req.body.body

        })
        await Post.create(newPost);
        res.redirect('/')
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }

  

  })

   //Put
  // Edit Post

  router.put("/edit-post/:id",  async (req, res) => {

    try {

      await Post.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        body:req.body.body,
        updatedAt: Date.now()
      })
      res.redirect(`/`)
    } catch (error) {
      console.log(error)
    }

  

  })


  //Delete
  // New Post

  router.delete("/delete-post/:id", async (req, res) => {

    try {
      await Post.deleteOne({_id: req.params.id});
      res.redirect('/')
    } catch (error) {
      console.log(error)
    }

  

  })



// This is to add dummy data to the database
// function insertPostData () {
//   Post.insertMany([
//     {
//       title: "Building APIs with Node.js",
//       body: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js"
//     },
//     {
//       title: "Deployment of Node.js applications",
//       body: "Understand the different ways to deploy your Node.js applications, including on-premises, cloud, and container environments..."
//     },
//     {
//       title: "Authentication and Authorization in Node.js",
//       body: "Learn how to add authentication and authorization to your Node.js web applications using Passport.js or other authentication libraries."
//     },
//     {
//       title: "Understand how to work with MongoDB and Mongoose",
//       body: "Understand how to work with MongoDB and Mongoose, an Object Data Modeling (ODM) library, in Node.js applications."
//     },
//     {
//       title: "build real-time, event-driven applications in Node.js",
//       body: "Socket.io: Learn how to use Socket.io to build real-time, event-driven applications in Node.js."
//     },
//     {
//       title: "Discover how to use Express.js",
//       body: "Discover how to use Express.js, a popular Node.js web framework, to build web applications."
//     },
//     {
//       title: "Asynchronous Programming with Node.js",
//       body: "Asynchronous Programming with Node.js: Explore the asynchronous nature of Node.js and how it allows for non-blocking I/O operations."
//     },
//     {
//       title: "Learn the basics of Node.js and its architecture",
//       body: "Learn the basics of Node.js and its architecture, how it works, and why it is popular among developers."
//     },
//     {
//       title: "NodeJs Limiting Network Traffic",
//       body: "Learn how to limit netowrk traffic."
//     },
//     {
//       title: "Learn Morgan - HTTP Request logger for NodeJs",
//       body: "Learn Morgan."
//     },
//   ])
// }

// insertPostData();













export default router