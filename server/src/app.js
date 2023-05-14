const express = require('express');
const cors = require('cors')

const { getBooks ,postBook, getBook, deleteBook} = require('../src/controllers/books.controller');

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
}))

app.use(express.json());

app.get('/books', getBooks);
app.post('/books', postBook);
app.get('/books/:bookId', getBook);
app.delete('/books/:bookId', deleteBook);

module.exports = app;
