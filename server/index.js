const express = require('express');
const fs = require('fs')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api', (req, res) => {
  res.json({ success: true });
})

app.use('/api/space', require('./routes/space'))
app.use('/api/contact', require('./routes/contact'))


const port = 5000
app.listen(port, () => {
  console.log(port, '번 포트에서 서버 실행');
})