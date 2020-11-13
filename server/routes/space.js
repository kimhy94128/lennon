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
  const space = [
    {
      title: 'Art Performence',
      desc: '행위예술가 이뤄라 개인전시전',
      img: '행위예술가 이뤄라 개인전시전.4.jpg',
    },
    {
      title: 'Presentation',
      desc: '대관',
      img: '넓은강연장.jpg',
    },
    {
      title: 'Performence',
      desc: '생활문화축제',
      img: '생활문화축제.2.JPG',
    },
    {
      title: 'Drama Recording',
      desc: '연극촬영',
      img: '연극.1.JPG',
    },
    {
      title: 'Performence',
      desc: '생활문화축제',
      img: '생활문화축제.2.JPG',
    },
    {
      title: 'Drama Recording',
      desc: '연극촬영',
      img: '연극.1.JPG',
    }
  ];
  res.json({success: true, contents: space});
})



module.exports = router;