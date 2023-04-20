const productModel = require('../model/products');
const ApiError = require('../middleware/Error');

const getProducts = async function(req, res, next) {
	try {
		let details = await productModel.aggregate([
			{ $lookup: { 
                from: 'users', 
                localField: 'user_id', 
                foreignField: '_id', 
                as: 'details' } }
		]);
		return res.send(details);
	} catch (err) {
		return next(ApiError.badRequest('BadRequest....!'));
	}
};

module.exports = { getProducts };
