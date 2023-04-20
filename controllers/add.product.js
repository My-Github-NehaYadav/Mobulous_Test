const productModel = require("../model/products");
const ApiError = require('../middleware/Error');
const productSchema = require("../schema/product.schema");

const addProduct = async function(req, res, next){
    let isValid = productSchema.validate(req.body);

    if (isValid.error) {
        return next(ApiError.validationError("ValidationError...!"));
    };
    try{
        await productModel.create(req.body);
        return res.send({message: "Added a new product!"})
    }
    catch (err) {
        return next(ApiError.badRequest("BadRequest....!"));
    };
}

module.exports = { addProduct }