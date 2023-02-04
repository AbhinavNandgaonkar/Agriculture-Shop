const { Order, ProductCart } = require("../model/order");
// var multer = require('multer');

// var storage = multer.diskStorage({
//   destination: function(req,file,cb){
//     cb(null,'uploads');
//   }})

//   var upload = multer({storage:storage})



  exports.createOrder = (req, res) => {
    const order = new Order(req.body);

    // product.productImagePath = req.file.path;


//  const order = new Order(req.body.order);
  order.save((err, order) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to save your order in DB"
      });
    }
    res.json(order);
  });
};



exports.getOrderById = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "NO order found in DB"
        });
      }
      req.order = order;
      next();
    });
};




exports.getAllOrders =(req, res) => 
  {
    Order.find().exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: "NO orders found"
        });
      }
      res.json(orders);
    });
  };


  exports.getOrder = (req, res) => {
    return res.json(req.order);
  };

  
  exports.removeOrder = (req, res) => {
    const order = req.order;
  
    order.remove((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this order"
        });
      }
      res.json({
        message: "Successfull deleted"
      });
    });
  };
  