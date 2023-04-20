const Joi = require("joi");

const UserSchema = Joi.object({
    user_id: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required()
});


module.exports = UserSchema;