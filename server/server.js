const express = require('express');
const cors = require('cors');
const upload = require('./upload');

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

app.post('/submit_details', upload.array('file', 100), (req, res) => {

    try {

        const data = req.body;


        
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