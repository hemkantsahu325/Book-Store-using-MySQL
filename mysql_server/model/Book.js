const mysql = require("mysql")
const Book = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "password",
    database: "book",
    port: 5000
});

Book.connect((err) => {
    if (err) throw err;
    console.log("Connection created..!!");
});

module.exports.Book = Book;
