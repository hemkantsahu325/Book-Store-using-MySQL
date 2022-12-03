const express = require("express");
const mysql = require("mysql");
const router = require("./routes/book-routes");

const userRouter = require("./routes/user-routes");
const orderRouter = require("./routes/order-routes");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books
app.use("/user", userRouter);    
app.use("/order", orderRouter);  

app.use("/books", router);
const port = 5000;
app.listen(port, (err) => {
    if (err)
        throw err
    else
        console.log("Server is running at port %d:", port);
});
