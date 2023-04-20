const ApiError = require('../middleware/Error');
const FCM = require("fcm-node");
const SERVER_KEY = process.env.SERVER_KEY;

const fcm = async (req, res, next) => {
    try{
         
        let fcm = new FCM(SERVER_KEY);
        let message = {
            to: "/topics/" + req.body.topic,
            notification : {
                title: req.body.title,
                body: req.body.body
            }
        }

        fcm.send(message, (err, response) => {
            if(err){
                next(err);
            }else{
                res.send(response)
            }
        })
    }
    catch(err){
        return next(ApiError.badRequest("BadRequest....!"));
    }
}


module.exports = { fcm };
