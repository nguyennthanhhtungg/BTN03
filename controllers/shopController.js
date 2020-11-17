const brandModel = require('../models/brandModel');
const categoryModel = require('../models/categoryModel');
const colorModel = require('../models/colorModel');
const sizeModel = require('../models/sizeModel');
const shoeModel = require('../models/shoeModel');

exports.index = function (req, res) {
    //Get brands from model
    const brands = brandModel.list();

    //Get categories from model
    const categories = categoryModel.list();

    //Get colors from model
    const colors = colorModel.list();

    //Get sizes from model
    const sizes = sizeModel.list();

    //Get shoes from model
    const shoes = shoeModel.list();

    res.render('layout', {partial_content: 'shop/index', title: 'THE MATRIX', brands, categories, colors, sizes, shoes});
}

exports.shoe_detail = function (req, res) {
    //Get brands from model
    const brands = brandModel.list();

    //Get categories from model
    const categories = categoryModel.list();

    //Get colors from model
    const colors = colorModel.list();

    //Get sizes from model
    const sizes = sizeModel.list();

    //Get shoe by id from model
    const shoe = shoeModel.shoebyId();

    res.render('layout', {partial_content: 'shop/detail', title: 'THE MATRIX', brands, categories, colors, sizes, shoe});
}