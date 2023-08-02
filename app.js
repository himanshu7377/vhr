const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const url = 'mongodb+srv://himanshu:MwdSR3OYPatR7yOo@cluster0.iyctvo6.mongodb.net/v6Hr';

const Photo = require('./models/photo');

const photoRoutes = require('./route/photos');

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
};

mongoose
  .connect(url, connectionParams)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));




  app.use(cors());
  app.use('/api', photoRoutes);

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
