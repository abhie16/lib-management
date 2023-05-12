const express = require('express');
const { getBooks } = require('../src/routes/books.controller');
const cors = require('cors')

const app = express();


app.use(cors({
    origin: "http://localhost:3000",
}))

app.use(express.json());

app.get('/books', getBooks);

module.exports = app;
