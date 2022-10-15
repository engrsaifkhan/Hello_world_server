import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())
app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.get('/profile', (req, res) => {
  res.send('I am profile page')
})

app.get('/weather', (req, res) =>{
  res.send({
    temp_c:'28',
    region:'sindh',
    city: 'karachi',
    localtime: '10:15',
    condition:'partially cloud',
    humidity: '11',
    precip_mm: '0.5',
    uv: '0.2',
    vis_km: '130',
    wind_kph: '15',
  })
})
app.listen(port, () => {
  console.log(`local host: ${port}`)
})
