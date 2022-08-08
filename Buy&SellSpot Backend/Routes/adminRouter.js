const Admin = require('../models/admin.js');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { countDocuments } = require('../models/admin.js');
const jwt = require('jsonwebtoken');




//admin upload
router.post('/adminmain/upload',
    [
        check('aname', "Enter your name").not().isEmpty(),
        check('aemail', "Please enter a proper email").isEmail()

    ]
    , (req, res) => {
        const errors = validationResult(req);
        console.log(errors.array())

        if (!errors.isEmpty()) {
            res.status(400).json(errors.array());

        }
        else {

            const aname = req.body.aname;
            const aemail = req.body.aemail;
            const apassword = req.body.apassword;
            const aphoneNumber = req.body.aphoneNumber;
            const aaddress = req.body.aaddress

            bcrypt.hash(apassword, 10, function (error, hash) {

                //password encryption

                var myData = new Admin({ aname: aname, aemail: aemail, apassword: hash, aphoneNumber: aphoneNumber, aaddress: aaddress });
                myData.save().then(() => {
                    //success insert

                    res.status(201).json({ message: "Registered success!!" });
                })

                    .catch(function (e) {
                        res.status(500).json({ message: e })

                    }

                    )
            }
            )
        }


    })

// admin login------

router.post('/adminmain/login', function (req, res) {
    const aemail = req.body.aemail;
    const apassword = req.body.apassword;

    Admin.findOne({ aemail: aemail })
        .then(function (myData) {
            if (myData === null) {
                return res.status(200).json({ message: "email or password invalid!!", success: false })
            }
            bcrypt.compare(apassword, myData.apassword, function (err, result) {
                if (result === false) {
                    return res.status(200).json({ message: "email or password invalid!!", success: false })
                }
                //username and password valid

                const admintoken = jwt.sign({ adminID: myData._id }, 'adminsecretkey');
                res.status(200).json({
                    message: "login success",
                    success: true,
                    admintoken: admintoken
                })
            })
        })
        .catch(function (e) {
            res.status(500).json({ message: "Unable to login!!" })
        })
})

module.exports = router;

