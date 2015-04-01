var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var models = require(__dirname + '/models');
var request = require('request');

var app = express();

var User = models.users;
var Artwork = models.artworks;
var Comment = models.comments;

app.use(bodyParser());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// USERS
app.get('/users', function(req, res){
  User
    .findAll()
    .then(function(users){
      res.send(users);
    });
});

app.get('users/:id', function(req, res){
  User
    .findOne({ where: {id: req.params.id}, include: Artwork})
    .then(function(user){
      res.send(user);
    });
});

app.post('/users', function(req, res){
    User
      .create(req.body)
      .then(function(newUser){
        res.send(newUser);
      });
});

app.put('users/:id', function(req, res){
  User
    .findOne(req.params.id)
    .then(function(user){
      user
        .update(req.body)
        .then(function(updatedUser){
          res.send(updatedUser);
        });
    });
});

app.delete('users/:id', function(req, res){
  User
    .findOne(req.parmas.id)
    .then(function(user){
      user
        .destroy()
        .then(function(deletedUser){
          res.send(deletedUser);
        });
    });
});

// ARTWORKS
app.get('/artworks', function(req, res){
  Artwork
    .findAll({ include: Comment })
    .then(function(artworks){
      res.send(artworks);
    });
});

app.get('/artworks/:id', function(req, res){
  Artwork
    .findOne({ where: {id: req.params.id}, include: Comment})
    .then(function(artwork){
      res.send(artwork);
    });
});

app.get('/users/:id/artworks', function(req, res){
  User
    .findOne(req.params.id)
    .then(function(user){
      Artwork
        .findAll()
        .then(function(artworks){
          user.getArtworks()
          .then(function(userArtworks){
            res.send(userArtworks);
          });
        });
    });
});

// COMMENTS
app.get('/comments', function(req, res){
  Comment
    .findAll()
    .then(function(comments){
      res.send(comments);
    });
});

app.get('/users/:id/comments', function(req, res){
  User
    .findOne(req.params.id)
      .then(function(user){
        Comment
          .findAll()
          .then(function(comments){
            user.getComments()
            .then(function(userComments){
              res.send(userComments);
            });
          });
      });
});

app.get('/artworks/:id/comments', function(req, res){
  Artwork
    .findOne(req.params.id)
      .then(function(artwork){
        Comment
          .findAll()
          .then(function(comments){
            artwork.getComments()
            .then(function(artworkComments){
              res.send(artworkComments);
            });
          });
      });
});

app.post('/users/:id/comments', function(req, res){
  User
    .findOne(req.params.id)
    .then(function(user){
      Comment
        .create(req.body)
        .then(function(newComment){
          user.addComment(newComment)
          res.send(newComment);
        });
    });
});

app.put('/comments/:id', function(req, res){
  Comment
    .findOne(req.params.id)
    .then(function(comment){
      comment
        .update(req.body)
        .then(function(updatedComment){
          res.send(updatedComment);
        });
    });
});

app.delete('/comments/:id', function(req, res){
  Comment
    .findOne(req.params.id)
    .then(function(comment){
      comment
        .destroy()
        .then(function(deletedComment){
          res.send(deletedComment);
        });
    });
});

// JOINT TABLE ROUTES

app.put('/users/:id/add_artwork', function(req,res) {
  var userId = req.params.id;
  var artworkId = req.body.artwork_id;

  User
    .findOne(userId)
    .then(function(user) {
      Artwork
        .findOne(artwork_id)
        .then(function(artwork) {
          user.addArtwork(artwork);
          res.send('Success');
        })
    })
});

app.put('/users/:id/remove_artwork', function(req, res) {
  var userId = req.params.id;
  var artworkId = req.body.artwork_id;

  User
    .findOne(userId)
    .then(function(user) {
      Artwork
        .findOne(artworkId)
        .then(function(artwork) {
          user.removeArtwork(artwork);
          res.send('Success');
        })
    })
});

app.listen(3000, function() {
  console.log('Server running on port 3000 :-)');
});
