const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ success: true });
})

app.use('/api/space', require('./routes/space'))

const port = 5000
app.listen(port, () => {
  console.log(port, '번 포트에서 서버 실행');
})