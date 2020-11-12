const express = require('express');
const router = express.Router()
const fs = require('fs');
const multer = require('multer');

fs.readdir('uploads', (err) => {
  if(err){
    console.log('폴더가 존재하지 않습니다. 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
  }
})

router.get('/', (req, res) => {
  res.json({success: true});
})

module.exports = router;