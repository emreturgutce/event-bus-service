const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

app.post('/events', async (req, res) => {
  const event = req.body

  await axios.post('http://posts-clusterip--srv:4000/events', event)
  await axios.post('http://comments-srv:4001/events', event)
  await axios.post('http://query-srv:4002/events', event)

  res.json({ status: 'OK' })
})

app.listen(4005, () => console.log('App is running on port 4005'))
