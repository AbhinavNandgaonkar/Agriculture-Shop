const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = 3002
mongoose.connect('mongodb://localhost:27017/Mybackendshop',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("DB CONNECTED")
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My routes
const categoryRoutes = require("./routes/category");
const productRouts = require("./routes/product");
const userRouts = require("./routes/user");
const orderRouts = require("./routes/order");

//My Routes

app.use("/api", categoryRoutes);
app.use("/api",productRouts);
app.use("/api",userRouts);
app.use("/api",orderRouts);
app.use("/uploads",express.static('uploads'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

