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
        title: 'Photo 1',
        description: 'This is the first photo',
        imageUrl: 'https://dummyimage.com/600x400/000000/ffffff',
        images: [
          'https://dummyimage.com/600x400/000000/ffffff',
          'https://dummyimage.com/600x400/ff0000/ffffff',
        ],
      },
      {
        title: 'Photo 2',
        description: 'This is the second photo',
        imageUrl: 'https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bmF0aW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
        images: [
          'https://dummyimage.com/600x400/ff0000/ffffff',
          'https://dummyimage.com/600x400/00ff00/ffffff',
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
