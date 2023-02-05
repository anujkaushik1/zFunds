const express = require('express');
const cors = require('cors');
const upload = require('./upload');
const fs = require('fs');
const path = require('path');


const app = express();

app.use(express.json());

app.use(cors({
    origin : true,
    credentials : true
}))

const PORT = 5000;

app.get('/', (req, res) => {

    res.status(200).send('Welcome to zFunds');

});

app.post('/submit_details', upload.array('files', 3), (req, res) => {

    try {

        const {email, father_name, mother_name, martial_status, annual_income} = req.body;

        const dataObj = {
            email, 
            father_name, 
            mother_name, 
            martial_status, 
            annual_income
        }

        const dataJson = JSON.stringify(dataObj);

        const dataFolderPath = path.join(__dirname, 'data');

        

        fs.writeFileSync(`${dataFolderPath}/${father_name}.json`, dataJson);

        res.status(200).json({
            success : 'Data Submitted Successfully',
            data
        })

        
    } catch (error) {
        
        res.status(400).json({
            success : 'false',
            data : error.message
        })
    }

})

const serverStart = async() => {

    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })  
    } catch (error) {
        console.log(error);
    }

}

serverStart();