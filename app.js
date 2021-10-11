const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv/config'); 


app.use(express.urlencoded({extended: true})); 
app.use(express.json());
const PORT = 3001;

const dataRoute = require('./routes/data');
app.use('/data', dataRoute);

mongoose.connect(
  process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(() => console.log("Database connected!"))
  .catch(err => console.log('Somethig happened while connecting to database',err)
);

app.listen(
  PORT,
  () => console.log(`Server is running on http://localhost:${PORT}`)
)

