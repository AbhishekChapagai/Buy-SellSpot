const multer = require('multer');

const storage = multer.diskStorage({

    destination : function(req, file, cb){
        cb(null, './image/VehicleImage')
    },
    filename : function(req, file, cb){
        cb(null, Date.now() +  file.originalname)
    },

    // destination : function(req, file, cb){
    //     cb(null, './image/UserImage')
    // },
    // userImage : function(req, file, cb){
    //     cb(null, Date.now() + file.originalname)
    // }
});


const filefilter = function(req,file,cb){
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
        cb(null, true)
    }
    else{
        cb(null, false)
    }
}


const upload = multer({
    storage: storage,
    fileFilter: filefilter

});

module.exports = upload;