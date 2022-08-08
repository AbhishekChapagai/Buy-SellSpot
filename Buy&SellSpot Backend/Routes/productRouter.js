const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');
const { check, validationResult } = require('express-validator');
const authorization = require('../middleware/authentication')
const upload = require('../middleware/uploads')

router.post('/product/insert', upload.single('pimage'), function (req, res) {
    //console.log(req.file)
    if (req.file == undefined) {
        return res.status(400).json({
            message: "Invalid Image format!!"
        })
    }
    const userid = req.body.userid;
    const vehicleName = req.body.vehicleName;
    const vehicleModel = req.body.vehicleModel;
    const vehicleMileage = req.body.vehicleMileage;
    const vehicleYear = req.body.vehicleYear;
    const vehicleTransmission = req.body.vehicleTransmission;
    const vehiclePrice = req.body.vehiclePrice;
    const contact = req.body.contact

    const vehichleData = new Product({
        userid: userid,
        vehicleName: vehicleName, vehicleModel: vehicleModel, vehicleMileage: vehicleMileage,
        vehicleYear: vehicleYear, vehicleTransmission: vehicleTransmission, vehiclePrice: vehiclePrice, contact, pimage: req.file.filename
    });
    vehichleData.save()
        .then(function (result) {
            res.status(201).json({ message: "Vehicle Added!!" })
        })
        .catch(function (err) {
            res.status(500).json({ message: "Vehicle unable to add!!" })
        })

})


//Product show

router.get('/product/showall', function (req, res) {
    Product.find()
        .then(function (data) {
            res.status(200).json({ success: true, data: data });
        })
        .catch(function (error) {
            res.status(500).json({ success: false, message: error })
        })

})


router.get('/product/single/:pid', function (req, res) {
    const pid = req.params.pid;
    Product.findOne({ _id: pid })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (error) {
            res.status(500).json({ message: error })
        })

})

router.get('/product/one/:id',function(req,res){
    const id=req.params.id;
    Product.find({_id:id})
    .then(function(data){
        res.status(200).json({data:data});
    })
    .catch(function(e){
        res.status(500).json({message:e})
    })
})

// delete product
router.delete('/product/delete/:pid', authorization.verifyUser, function (req, res) {
    const pid = req.params.pid;
    Product.deleteOne({ _id: pid })
        .then(function (result) {
            res.status(201).json({ message: "Vehicle deleted!!" })
        })
        .catch(function (error) {
            res.status(500).json({ message: "Vehicle unable to delete!!" })
        })
})


//Update product

router.put('/product/update/:id', function (req, res) {
    const vehicleName = req.body.vehicleName;
    const vehicleModel = req.body.vehicleModel;
    const vehicleMileage = req.body.vehicleMileage;
    const vehicleYear = req.body.vehicleYear;
    const vehicleTransmission = req.body.vehicleTransmission;
    const vehiclePrice = req.body.vehiclePrice;
    const contact = req.body.contact;
    const id = req.params.id;

    Product.updateOne({ _id: id }, { vehicleName: vehicleName, vehicleModel: vehicleModel, vehicleMileage: vehicleMileage, vehicleYear: vehicleYear, vehicleTransmission: vehicleTransmission, vehiclePrice: vehiclePrice, contact: contact })

        .then(function (result) {
            res.status(201).json({ message: "Vehicle Updated!!", success: true })
        })
        .catch(function (error) {
            res.status(500).json({ message: "Vehicle unable to update!!", success: false })
        })

})

// product show by id
router.get('/product/:pid', function (req, res) {
    const pid = req.params.pid
    Product.find({ userid: pid })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (e) {
            res.status(500).json({ message: e })
        })
})
module.exports = router;


