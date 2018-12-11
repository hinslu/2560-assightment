// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var product = require('./models/product');

// MongoDB
mongoose.connect('mongodb://localhost/Products');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = express.Router();

// Routes
//post
router.route('/products').post(function (req, res) {
    console.log("in add");
    var p = new product();
    p._id = req.body._id;
    p.title = req.body.title;
    p.price = req.body.price;
    p.instock = req.body.instock;
    p.photo = req.body.photo;
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Product Created !' })
    })
});

//get
router.route('/products').get(function (req, res) {
    product.find(function (err, products) {
        if (err) {
            res.send(err);
        }
        res.send(products);
    });
});

//get by ID
router.route('/products/:product_id').get(function (req, res) {
    product.findById(req.params.product_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

//update
router.route('/products/:product_id').put(function (req, res) {
    product.findById(req.params.product_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod._id = req.body._id;
        prod.title = req.body.title;
        prod.price = req.body.price;
        prod.instock = req.body.instock;
        prod.photo = req.body.photo;
        prod.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Product updated!' });
        });

    });
});

//delete
router.route('/products/:product_id').delete(function (req, res) {

   
    product.deleteOne({ _id: req.params.product_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});

// Start server
app.use('/api',router);
app.listen(8090);
console.log('Listening on port 8090');