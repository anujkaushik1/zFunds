const express = require('express');
const cors = require('cors');
const upload = require('./upload');
const fs = require('fs');
const path = require('path');


const app = express();

// middleware to parse JSON data in the request body

app.use(express.json());

app.use(cors({
    origin : true,
    credentials : true
}))

const PORT = 5000;

// Route to handle GET request to the root endpoint

app.get('/', (req, res) => {

    res.status(200).send('Welcome to zFunds');

});

// Route to handle POST request to submit user details  

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

        // Convert the data object to a JSON string

        const dataJson = JSON.stringify(dataObj);

         // Path to the folder where the data files will be stored(eg - our file dirname\data)

        const dataFolderPath = path.join(__dirname, 'data');

        // Write the data to a file        

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