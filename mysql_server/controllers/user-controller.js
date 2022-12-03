const Book = require("../model/Book");


const getAllUser = async (req, res, next) => {
   
    var sql = "SELECT * FROM User";
    User.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
};

const getByIdUser = async (req, res, next) => {
  const id = req.params.id;
 
  var sql = "SELECT * FROM User WHERE id=?";

  User.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
};


const addUser = async (req, res, next) => {
    const { name, email, password  } = req.body;
  var sql = "INSERT INTO User (name, email, password) VALUES (?,?,?)";
  
  User.query(sql,[name,email, password], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }); 

};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  var sql = "UPDATE User set name=?, email=?, password=? WHERE id=?";
  
  User.query(sql,[name,email, password], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }); 

};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  var sql = "DELETE FROM User WHERE id = ?";
  User.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }); 
  
};






exports.getAllUser = getAllUser;
exports.addUser = addUser;
exports.getByIdUser = getByIdUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
