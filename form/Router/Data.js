// js work for form

const express = require("express")
const Data = require("../Connection/connection")
const app = express.Router()
Data.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        throw err;
    }
});

app.get('/', (req, res) => {
    const query = 'SELECT * FROM Data';
    Data.query(query,async (err, result) => {
        try{
           const id = result.map(el => el.id)
           const Email = result.map(el => el.email)
           const password = result.map(el => el.Password)
           const time = result.map(el => el.We_get_data_on)
           const DataOfForm =  res.send(JSON.stringify(result));
           console.log(JSON.parse(DataOfForm.id))
        }catch(err){
            console.error("'MySQL query error:', err")
            res.status(500).send('Error fetching data');
        }
    });
});


module.exports = app