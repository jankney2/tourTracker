let id = 1

let animals = [
  {
    id:id++,
    species: "gorilla",
    quantity: 100,
    imageUrl: "https://media.graytvinc.com/images/810*455/harambe+cincinnati+zoo+gorilla.jpg"
  },
  {
    id:id++,
    species: "T-Rex",
    quantity: 1,
    imageUrl: "https://i.pinimg.com/originals/43/78/59/437859c98eb736d81f5dbdc2cf00cf84.jpg"
  }
]



module.exports= {
  get: (req, res) => {res.send(animals)},

  create: (req, res) => {
    let newAnimal= req.body
    newAnimal.id= id++

    animals.push(newAnimal)

    res.send(animals)
  },
  
  update:  (req, res) => {res.send(animals)},
  
  delete:  (req, res) => {res.send(animals)}

}