const Book = require("../model/Book");


const getAllBooks = async (req, res, next) => {
   
    var sql = "SELECT * FROM Book";
    Book.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
 
  var sql = "SELECT * FROM Book WHERE id=?";

  Book.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
};


const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  var sql = "INSERT INTO Book (name, author, description, price,available, image) VALUES (?,?,?,?,?,?)";
  
  Book.query(sql,[name, author, description, price,available,image], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }); 

};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  var sql = "UPDATE Book set name=?, author=?, description=?,price=?,available=?,image=? WHERE id=?";
  
  Book.query(sql,[name, author, description, price,image,price], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }); 

};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  var sql = "DELETE FROM Book WHERE id = ?";
  Book.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }); 
  
};


const getBooksBySearch = async (req, res) => {
  const { searchQuery } = req.query;


  var sql = "select * from Book where name LIKE '%searchQuery%'?";
  Book.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};



exports.getBooksBySearch = getBooksBySearch;
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
