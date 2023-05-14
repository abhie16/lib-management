const books = require('../models/books.model');

function postBook ( req, res) {
   if(!req.body.name){
      return res.status(400).json(
         {
            error:"Missing book Name"
         }
      );
   }

   const newBook = {
      name: req.body.name,
      id: books.length,
   };

   books.push(newBook);
   res.json(newBook);
}

function getBooks(req, res) {
    return res.status(200).json(books);
 }

function getBook(req, res){
   const bookId = Number(req.params.bookId);
   const book = books[bookId];

   if(book){
      res.json(book);
   }
   else{
      res.status(404).json(
         {
            error: "Book does not exist"
         }
      );
   }
   console.log(books[bookId]);

}

function deleteBook(req, res){
   const bookId = Number(req.params.bookId);

   books.splice(bookId, 1);
   console.log(books);
   res.json({message:"deleted successfully"});

}

 module.exports = {
    getBooks,
    postBook,
    getBook,
    deleteBook
 }