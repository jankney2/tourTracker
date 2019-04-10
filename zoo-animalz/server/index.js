const express= require('express')
const AnimalCtrl= require('./controllers/Animals')
const app = express()
const port= 4040
app.use(express.json()) //top level middleware- use to have access to req.body



app.listen(port, ()=> console.log("listening on ", port))

app.get("/api/animals", AnimalCtrl.get)
app.post('/api/animals', AnimalCtrl.create )

