// import express from 'express'
// import cors from 'cors'
// const app = express()
// // const port = 3000;
//
// app.use(cors())
// app.get('https://climatedatum.herokuapp.com/home', (req, res) => {
//   res.send('Hello World!')
// })
//
// app.get('https://climatedatum.herokuapp.com/profile', (req, res) => {
//   res.send('I am profile page')
// })
//
// app.get('https://climatedatum.herokuapp.com/weather', (req, res) =>{
//   res.send({
//     temp_c:'28',
//     region:'sindh',
//     city: 'karachi',
//     localtime: '10:15',
//     condition:'partially cloud',
//     humidity: '11',
//     precip_mm: '0.5',
//     uv: '0.2',
//     vis_km: '130',
//     wind_kph: '15',
//   })
// })
//
// const port = process.env.PORT || 3000;
//
// app.listen(port, () => {
//   console.log(`local host: ${port}`)
// })



import express from "express"
import cors from "cors"
const app = express();
app.use(cors())
app.use(express.json()); //it use to decrypt express for server
const port = process.env.PORT || 3000;
let users= [];

app.post('/user', (req,res) => {

console.log(req.body);
users.push(req.body);

  res.send("user is created");
})

app.get('/user', (req,res) =>{


  res.send(users);
})

app.put('/user', (req,res) =>{


  res.send("user is modified here");
})

app.delete('/user', (req,res) =>{


  res.send("user is deleted");
})

app.get('/', (req, res) => {
  console.log("request received at server");
  res.send('Hello World!')
})

app.get('/profile', (req, res) => {
  console.log("profile request");
  res.send('here is a profile')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
