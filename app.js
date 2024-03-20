const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/GoFunds')
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('error connecting to database'));

 
const business = require('./routes/business.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/business', business);

 
app.listen(8000, () => console.log('Server is running on port 8000'));
 



