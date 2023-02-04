const express = require("express");
const router = express.Router();
// var multer  = require('multer');

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename: function(req, file, cb) {
//     cb(null,file.originalname);
//   }
// });

// var upload = multer({ storage: storage })


const {
  getOrderById,
  createOrder,
  getAllOrders,
  getOrder,
  removeOrder,
  getOrderStatus,
  updateStatus
} = require("../controller/order");

//params


//Actual routes
//create
router.post("/order/create", createOrder);
router.get("/orders",getAllOrders);
router.param("orderId", getOrderById);
router.get("/order/:orderId", getOrder);
router.delete("/order/:orderId",removeOrder);


module.exports = router;
