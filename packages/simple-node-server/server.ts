import express from "express";
const app = express();
const port = 3001;

export  interface QueryPayload {
  foo:string
}

app.get("/data", (req, res) => {
  //cuando tener problemas con los cors
  //res.serHeader('Access-Control-Allaw-Origin', '*')
  const data: QueryPayload  = { foo: "bar" }
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
