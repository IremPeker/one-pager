const express = require("express");
const router = express.Router();
const Data = require('../models/Data');

// get all posts
router.get('/', async(req, res) => {
  try {
      const data = await Data.find();
      res.status(200).send(data);
  } catch (error) {
      res.json({message:error});
      next(e); 
  }
});

// submit a post
router.post('/', async(req, res) => {
  const data = new Data({
    title: req.body.title,
    items: req.body.items
  });

  try {
      const savedData = await data.save();
      res.json(savedData); 
  } catch (error) {
      res.json({message:error});
      next(e); 
  }
});

module.exports = router;