const express = require('express');

const router = express.Router();

const Photo = require('../models/photo');

// Route to get all photos with pagination
router.get('/photos', async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Get the requested page number or default to page 1
  const pageSize = 4; // Set the number of photos per page (adjust as needed)

  try {
    const totalPhotos = await Photo.countDocuments({});
    const totalPages = Math.ceil(totalPhotos / pageSize);

    const photos = await Photo.find({})
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({ photos, totalPages, currentPage: page });
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({ message: 'Failed to fetch photos.' });
  }
});



// Route to get a specific photo by ID
router.get('/photos/:id', async (req, res) => {
    try {
      const photo = await Photo.findById(req.params.id);
      if (!photo) {
        return res.status(404).json({ message: 'Photo not found' });
      }
      res.json(photo);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

module.exports = router;
