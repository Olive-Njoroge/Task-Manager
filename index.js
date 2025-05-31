const express = require('express');
const mongoose = require('mongoose');

//Create an express server and Middleware
const app = express();
app.use(express.json());

//Constants
const mongoUri = 'mongodb://localhost:27017/taskdb';
const PORT = 3000;

//mongoDB connection
mongoose.connect(mongoUri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log('Connected to mongoDB'))
  .catch(err => console.error('MongoDb connection error:', err));

//Listener / fire up the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});