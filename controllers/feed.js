const fs = require('fs');
const path = require('path');

// const { validationResult } = require('express-validator');

// const User = require('../models/user');

// // const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res.status(200).json({ user: [{email: "User post"}]
  });
};
exports.getPost = (req, res, next) => {
  // const currentPage = req.query.page || 1;
//   const perPage = 2;
//   let totalItems;
  // Post.find()
//     .countDocuments()
//     .then(count => {
//       totalItems = count;
      return Post.find()
//         .skip((currentPage - 1) * perPage)
        // .limit(perPage);
    // })
    .then(posts => {
      res
        .status(200)
        .json({
          message: 'Fetched posts successfully.',
          posts: posts
          // totalItems: totalItems
        });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  if (!req.file) {
    const error = new Error('No image provided.');
    error.statusCode = 422;
    throw error;
  }
//   const imageUrl =req.file.path.replace("\\" ,"/");
  // const title = req.body.title;
  const content = req.body.content;
  let creator;
  const user = new userId({
        email: email,
        password: hashedPw,
        first_name: first_name,
        last_name: last_name,
        creator: req.userId
  });
  user
    .save()
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      creator = user;
      return user.save();
    })
    .then(result => {
      return User.findById(req.userId)
      res.status(201).json({
        message: 'User created successfully!',
        user: userId,
        creator: { _id: creator._id, name: creator.name }
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// exports.getPost = (req, res, next) => {
//   const postId = req.params.postId;
//   Post.findById(postId)
//     .then(post => {
//       if (!post) {
//         const error = new Error('Could not find post.');
//         error.statusCode = 404;
//         throw error;
//       }
//       res.status(200).json({ message: 'Post fetched.', post: post });
//     })
//     .catch(err => {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);
//     });
// };

// exports.updatePost = (req, res, next) => {
//   const postId = req.params.postId;
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     const error = new Error('Validation failed, entered data is incorrect.');
//     error.statusCode = 422;
//     throw error;
//   }
//   const title = req.body.title;
//   const content = req.body.content;
//   let imageUrl = req.body.image;
//   if (req.file) {
//     imageUrl = req.file.path;
//   }
//   if (!imageUrl) {
//     const error = new Error('No file picked.');
//     error.statusCode = 422;
//     throw error;
//   }
//   Post.findById(postId)
//     .then(post => {
//       if (!post) {
//         const error = new Error('Could not find post.');
//         error.statusCode = 404;
//         throw error;
//       }
//       if (post.creator.toString() !== req.userId) {
//         const error = new Error('Not authorized!');
//         error.statusCode = 403;
//         throw error;
//       }
//       if (imageUrl !== post.imageUrl) {
//         clearImage(post.imageUrl);
//       }
//       post.title = title;
//       post.imageUrl = imageUrl;
//       post.content = content;
//       return post.save();
//     })
//     .then(result => {
//       res.status(200).json({ message: 'Post updated!', post: result });
//     })
//     .catch(err => {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);
//     });
// };

exports.deletePost = (req, res, next) => {
  const userIdId = req.params.userId;
  User.findById(userId)
    .then(user => {
      if (!user) {
        const error = new Error('Could not find user.');
        error.statusCode = 404;
        throw error;
      }
      if (user.creator.toString() !== req.userId) {
        const error = new Error('Not authorized!');
        error.statusCode = 403;
        throw error;
      }
//       // Check logged in user
//       clearImage(post.imageUrl);
      return User.findByIdAndDelete(usertId);
    })
    .then(result => {
       return User.findById(req.userId);
    })
    .then(user => {
      user.posts.pull(usertId);
      return user.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Deleted user.' });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// const clearImage = filePath => {
//   filePath = path.join(__dirname, '..', filePath);
//   fs.unlink(filePath, err => console.log(err));
// };
