const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
    origin : true,
    credentials : true
}))

const PORT = 5000;

app.get('/', (req, res) => {

    res.send('Welcome to zFunds');

});

app.post('/submit_details', (req, res) => {

    

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