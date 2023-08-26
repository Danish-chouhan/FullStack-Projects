const express = require("express");
const Data = require("../Connection/connection");
const app = express.Router();

Data.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        throw err;
    }
});

app.get('/', (req, res) => {
    const query = 'SELECT * FROM Data';
    Data.query(query, async (err, result) => {
        if (err) {
            console.error('MySQL query error:', err);
            res.status(500).send('Error fetching data');
        } else {
            const parsedData = result.map(el => ({
                id: el.id,
                email: el.email,
                Password: el.Password,
                We_get_data_on: el.We_get_data_on
            }));

            // Send the parsed data as JSON response
            res.json(parsedData);
        }
    });
});

module.exports = app;
