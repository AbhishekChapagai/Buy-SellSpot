const jwt = require('jsonwebtoken');
const User = require('../models/users');

module.exports.verifyUser = function (req, res, next) {
    try {

        const token = req.headers.authorization.split(" ")[1];
        const decodeData = jwt.verify(token, 'secretkey');
        User.findOne({ _id: decodeData.userID })
            .then(function (result) {
                req.user = result;
                next()
            })
            .catch(function (error) {
                res.status(401).json({ message: error })
            })

    }
    catch (err) {
        res.status(401).json({ message: "Unaued access!!" })
    }
}


