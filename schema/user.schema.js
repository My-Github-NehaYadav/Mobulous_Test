const Joi = require("joi");

const UserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required().strict(),
});


module.exports = UserSchema;