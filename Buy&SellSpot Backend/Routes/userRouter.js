
const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { countDocuments } = require('../models/users.js');
const jwt = require('jsonwebtoken');
const authorization = require('../middleware/authentication')

router.post('/upload',
	[
		check('name', "Enter your name").not().isEmpty(),
		check('email', "Please enter a proper email").isEmail()

	]
	, (req, res) => {
		const errors = validationResult(req);
		console.log(errors.array())

		if (!errors.isEmpty()) {
			res.status(400).json(errors.array());

		}
		else {

			const name = req.body.name;
			const email = req.body.email;
			const password = req.body.password;
			const phoneNumber = req.body.phoneNumber;
			const address = req.body.address
			// const role = req.body.role

			bcrypt.hash(password, 10, function (error, hash) {

				//password encryption

				var myData = new Users({ name: name, email: email, password: hash, phoneNumber: phoneNumber, address: address });
				myData.save().then(() => {
					//success insert

					res.status(201).json({ success: true, message: "Registered success!!" });
				})

					.catch(function (e) {
						res.status(500).json({ success: false, message: e })

					}

					)
			}
			)
		}


	})


// login------

router.post('/user/login', function (req, res) {
	const email = req.body.email;
	const password = req.body.password;

	Users.findOne({ email: email })
		.then(function (myData) {
			if (myData === null) {
				return res.status(200).json({ message: "email or password invalid!!", success: false })
			}
			bcrypt.compare(password, myData.password, function (err, result) {
				if (result === false) {
					return res.status(200).json({ message: "email or password invalid!!", success: false })
				}
				//username and password valid

				const token = jwt.sign({ userID: myData._id }, 'secretkey');
				res.status(200).json({
					message: "login success",
					success: true,
					token: token,
					data: myData
				})
			})
		})
		.catch(function (e) {
			res.status(500).json({ message: "Unable to login!!" })
		})
})

//Update user

router.put('/update/user/:id', authorization.verifyUser, function (req, res) {
	const name = req.body.name;
	const email = req.body.email;
	// const password = req.body.password;
	const phoneNumber = req.body.phoneNumber;
	const address = req.body.address;
	const id = req.params.id;

	Users.updateOne({ _id: id }, { name: name, email: email, phoneNumber: phoneNumber, address: address })

		.then(function (result) {
			res.status(201).json({ message: "User Updated!!", success: true })
		})
		.catch(function (error) {
			res.status(500).json({ message: "User unable to update!!", success: false })
		})

})

//Delete User

// router.delete('/user/delete/:uid', authorization.verifyUser, function (req, res) {
// 	const uid = req.params.uid;
// 	Users.deleteOne({ _id: uid })
// 		.then(function (result) {
// 			res.status(201).json({ message: "User deleted!!", success: true })
// 		})
// 		.catch(function (error) {
// 			res.status(500).json({ message: "User unable to delete!!", success: false })
// 		})
// })

router.delete("/user/delete/:id",function(req,res){
    const id = req.params.id;
    
    Users.deleteOne({_id:id})
    .then(function(result){
        res.status(200).json({message : "Accouted Deleted Successfully",success:true})
    })
    .catch(function(err){
        res.status(400).json({message : "error deleting account", success:false})
    })

});



//User show
router.get('/user/profile/:id', function (req, res) {
	const uid = req.params.id
	Users.findOne({ _id: uid })
		.then(function (data) {
			res.status(200).json(data);
		})
		.catch(function (e) {
			res.status(500).json({ message: e })
		})
})


//from token

router.get("/user/account", authorization.verifyUser, function (req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const decode = jwt.verify(token, "secretkey");
	const id = decode.userID
	Users.findOne({ _id: id })
		.then(function (result) {
			res.status(200).json({ success: true, data: result });
		})
		.catch(function (err) {
			res.status(401).json({ message: err, success: false })
		})
});




module.exports = router;