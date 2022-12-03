const Book = require("../model/Book");


const getAllOrder = async (req, res, next) => {
   
    var sql = "SELECT * FROM Order";
    Book.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
};



const addOrder = async (req, res, next) => {
    const { name, bookname, number, address  } = req.body;
  var sql = "INSERT INTO Book (name, bookname, number, address ) VALUES (?,?,?,?)";
  
  Book.query(sql,[name, bookname, number, address], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }); 


};




exports.getAllOrder = getAllOrder;
exports.addOrder = addOrder;

