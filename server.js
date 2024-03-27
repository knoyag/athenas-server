const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});


app.listen(PORT, () => {
  console.log(`Rulando al máximo en ${PORT}`);
});
