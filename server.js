const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 静的ファイルの提供
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
