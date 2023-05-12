const books = require('../models/books.model');


function getBooks(req, res) {
    return res.status(200).json(books);
 }

 module.exports = {
    getBooks,
 }