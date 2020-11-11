const db = require("../models");
const axios = require('axios');

// Defining methods for the booksController
module.exports = {
  
  findAll: function(req, res) {
    console.log("Axios")
    axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
    .then(function (response) {
      console.log(response.data.items)
      res.json(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    // db.Book
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};