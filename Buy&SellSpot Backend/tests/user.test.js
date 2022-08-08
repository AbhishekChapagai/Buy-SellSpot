const Users = require('../models/users');
const mongoose = require('mongoose');

const url ="mongodb://127.0.0.1:27017/buyandsellspot";
beforeAll(async () =>{
    await mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex : true
    });
});

afterAll(async () =>{
    await mongoose.connection.close();
});

describe('User Schema test', () => {
    // the code below is for insert testing
     it('Add User testing', () => {
        const user = {
            'name': 'Anil',
            'email': 'anil21@gmail.com',
            'password': '123456',
            'phoneNumber': '987425632555',
            'address': 'Chardobato',
            };
    
        return Users.create(user)
        .then((pro_ret) => {
            expect(pro_ret.name).toEqual('Anil');
         });
     });
    it('to test the update', async () => {
        return Users.findOneAndUpdate({_id:Object('607ea05dfc1c323fc0038005')},
       {$set : {name:'Anil'}})
        .then((pp)=>{
        expect(pp.name).toEqual('Anil')
        })
       });

       it('to test the delete freelancer is working or not', async () => {
        const status = await Users.deleteMany();
        expect(status.ok).toBe(1);  
       })
})