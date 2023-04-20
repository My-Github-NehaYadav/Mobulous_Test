const userModel = require("../model/users");
const UserSchema = require("../schema/user.schema");
const ApiError = require('../middleware/Error');
const jwt = require('jsonwebtoken');

const signupUser = async function (req, res, next) {
    let isValid = UserSchema.validate(req.body);

    if (isValid.error) {
        return next(ApiError.validationError("ValidationError...!"));
    };

    try {
        const {email, password} = req.body;
        let Result = await userModel.findOne({ email });
        if (Result) {
            return next(ApiError.duplicateError("DuplicateError...!"));
        };
        const token = await jwt.sign({email, password}, process.env.TOKEN_SECRET, { expiresIn: process.env.EXPIRESIN });
        let result = await userModel.create(req.body);
        return res.status(201).json({
            message: "New User Signup Successfully!",
            token: token
        });
    }
    catch (err) {
        return next(ApiError.badRequest("BadRequest....!"));
    };
};

module.exports =  { signupUser };