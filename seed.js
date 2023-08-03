const mongoose = require('mongoose');
const Photo = require('./models/photo');

const url = 'mongodb+srv://himanshu:MwdSR3OYPatR7yOo@cluster0.iyctvo6.mongodb.net/v6Hr';
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, connectionParams)
  .then(() => {
    console.log('Connected to MongoDB');

    // Sample photo data with images array
    const samplePhotos = [
      
      {
        title: 'city',
        description: 'This is the seven photo',
        imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
          'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1121782/pexels-photo-1121782.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
      },
      {
        title: 'Birds',
        description: 'This is the eight photo',
        imageUrl: 'https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
          'https://images.pexels.com/photos/70069/pexels-photo-70069.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/973165/pexels-photo-973165.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
      },
      // Add more sample photo objects as needed
    ];

    // Insert sample photos into the collection
    Photo.insertMany(samplePhotos)
      .then((insertedPhotos) => {
        console.log('Sample photos inserted successfully:', insertedPhotos);
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error('Error inserting sample photos:', err);
        mongoose.connection.close();
      });
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));
