const db = require("../models");
const axios = require('axios');

// Defining methods for the booksController
module.exports = {
  
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findGoogle: function(req, res) {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.title}`)
    .then(function (response) {
      res.json(response.data.items)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },
  create: function(req, res) {
    console.log(req.body)
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log(req.params.id)
    db.Book
      .findOne({ g_id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
