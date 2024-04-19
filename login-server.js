import express from "express"
import cors from "cors"
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  console.log(req)
  res.send({
    token: 'test'
  });
});

app.listen(5001, () => console.log('API is running on http://192.168.1.122:5001/login'));