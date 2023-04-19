const userModel = require("../model/users");
const ApiError = require('../middleware/Error');
const jwt = require('jsonwebtoken');

const loginUser = async function (req, res, next) {
    let {email, password, token} = req.body;
    console.log(req.body)
    if (!(email || password || token)) {
        return next(ApiError.validationError("ValidationError...!"));
    };

    try {
        let Result = await userModel.findOne({ email });

        if (Result) {
            await jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
                if(err) {
                    console.log(err)
                    return next(ApiError.invalidationToken("InvalidationToken...!"));
                }
                if(!(user.email == email && user.password == password)){
                    return next(ApiError.validationError("ValidationError...!"));
                }
                return res.status(201).json({
                    message: "User Login Successfully!"
                });
            })
        }
        else{
            return res.status(400).json({
                message: "User mail is worng!"
            });
        }
    }
    catch (err) {
        return next(ApiError.badRequest("BadRequest....!"));
    };
};

module.exports =  { loginUser };