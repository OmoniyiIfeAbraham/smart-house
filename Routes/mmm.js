const express = require('express')
const router = express.Router()

const width = document.body.offsetWidth;
const height = document.body.offsetHeight;

const doc = document.body.addEventListener('mousemove', function(e){
  const relativeWidth = e.clientX / width * 100;
  const relativeHeight = e.clientY / height * 100;
  document.body.style.setProperty('--mouse-x', relativeWidth);
  document.body.style.setProperty('--mouse-y', relativeHeight);
  
  number.dataset.number = parseInt(relativeWidth) + '%';
    })

module.exports = width
module.exports = height
module.exports = doc
module.exports = router