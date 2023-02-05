const path = require('path');
const multer = require('multer');
const fs = require('fs');

let storage = multer.diskStorage({
    destination : function(req, file, cb){
       
        const imageFolderPath = path.join(__dirname, 'images');
        const fatherImageFolder = `${imageFolderPath}\\${req.body.father_name}`;

        if(!fs.existsSync(fatherImageFolder))
             fs.mkdirSync(fatherImageFolder);



        console.log(fatherImageFolder);
        cb(null, `images/${req.body.father_name}/`)  // location where file will be saved

    },
    filename : function(req, file, cb){
        let ext = path.extname(file.originalname);  // rename file with current timestamp & extention => always unique
        console.log(ext);
        cb(null, Date.now() + ext);
    }
})

let upload = multer({
    storage : storage,
    limits : {
        fileSize : 1024 * 1024 * 2  // max 2mb file 
    }
})

module.exports = upload;