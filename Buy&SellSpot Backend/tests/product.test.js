const Product = require('../models/productModel');
const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/buyandsellspot";
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Product Schema test', () => {
    // the code below is for insert testing
    it('Add product testing', () => {
        const product = {
            'vehicleName': 'Maruti',
            'vehicleModel': 'C5',
            'vehicleMileage': '25KM/L',
            'vehicleYear': 'Dec ,2020',
            'vehicleTransmission': 'Automatic',
            'vehiclePrice': '10000000',
            'contact': '9842722414',
        };

        return Product.create(product)
            .then((pro_ret) => {
                expect(pro_ret.vehicleName).toEqual('Maruti');
            });
    });
    it('to test the update', async () => {
        return Product.findOneAndUpdate({ _id: Object('607972957a8b6f37280187a1') },
            { $set: { vehicleName: 'Honda' } })
            .then((pp) => {
                expect(pp.vehicleName).toEqual('Honda')
            })
    });66666666666666666

    it('to test the delete product is working or not', async () => {
        const status = await Product.deleteMany();
        expect(status.ok).toBe(1);
    })
})