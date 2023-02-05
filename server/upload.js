const path = require('path');
const multer = require('multer');
const fs = require('fs');

// defining disk storage for multer to store uploaded files

let storage = multer.diskStorage({
    destination : function(req, file, cb){
       
        // set folder path for saving images (eg - own dirname\images)

        const imageFolderPath = path.join(__dirname, 'images');
        const fatherImageFolder = `${imageFolderPath}\\${req.body.father_name}`;

        // check if folder exists, if not create a new one

        if(!fs.existsSync(fatherImageFolder))
             fs.mkdirSync(fatherImageFolder);

        // set the destination folder for the current file upload

        cb(null, `images/${req.body.father_name}/`)  // location where file will be saved

    },
    filename : function(req, file, cb){

         // rename the file to current timestamp + its original extension (file name => always unique)

        let ext = path.extname(file.originalname);  
        cb(null, Date.now() + ext);
    }
})

// multer upload configuration

let upload = multer({
    storage : storage,
    limits : {
        fileSize : 1024 * 1024 * 2  // max 2mb file 
    }
})

module.exports = upload;