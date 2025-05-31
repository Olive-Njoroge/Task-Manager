const express = require('express');
const mongoose = require('mongoose');

//Create an express server
const app = express();

//Create Middleware
app.use(express.json());

const mongoUri = 'mongodb://localhost:27017/taskdb';
const PORT = 3000;

mongoose.connect(mongoUri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log('Connected'))
  .catch(err => console.error('MongoDb connection error:', err));

//Listener
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});