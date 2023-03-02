import express from 'express';
const app = express();
const port = 3001;

app.get("/data", (req, res) => {
  //cuando tener problemas con los cors
  //res.serHeader('Access-Control-Allaw-Origin', '*')
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});