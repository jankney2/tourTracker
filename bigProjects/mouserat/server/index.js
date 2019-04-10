const express= require('express')
const app= express()
const port= 5555
const ShowCtrl= require('./controllers/ShowCtrl')


app.use(express.json())

app.listen(port, console.log("backend server running on "+port)) //i have verified that the nodemon server is listening on the port 

app.get('/api/shows', ShowCtrl.get) //get request works on the backend. 

app.post('/api/shows', ShowCtrl.create) //remember that showctrl.create is expecting an OBJECT. post request works on backend

app.delete(`/api/shows/:id`, ShowCtrl.delete) //delete works and returns updated shows arr. 

app.put('/api/shows/:id', ShowCtrl.update) //backend for put request works. 