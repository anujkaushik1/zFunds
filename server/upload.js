const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'images/')  // location where file will be saved
    },
    filename : function(req, file, cb){
        let ext = path.extname(file.originalname);  // rename file with current timestamp & extention => always unique
        cb(null, Date.now() + ext);
    }
})

let upload = multer({
    storage : storage,
    fileFilter : function(req, file, cb){ 
        console.log(file.mimetype);
        console.log(file);
        cb(null, true);
    
    },
    limits : {
        fileSize : 1024 * 1024 * 2  // max 2mb file 
    }
})

module.exports = upload;