let id = 1
let shows = [
  {
    date: '1/1/19',
    venue: 'The Velour',
    cityState: 'Provo, UT',
    id: id++,
  },
  {
    date: '2/1/19',
    venue: 'The Viv',
    cityState: 'Salt Lake City, UT',
    id: id++,
  },
  {
    date: '3/1/19',
    venue: 'Kilby Court',
    cityState: 'Denver, CO',
    id: id++,
  },
  {
    date: '4/1/19',
    venue: 'the 9:30 club',
    cityState: 'Washington DC',
    id: id++,
  },
]





module.exports = {

  get: (req, res) => {

    res.status(200).send(shows)
  },

  create: (req, res) => {
    //push body of request into shows array

    let newShow = {
      date: req.body.date,
      venue: req.body.venue,
      cityState: req.body.cityState,
      id: id++,
    }
    shows.push(newShow)

    res.send(shows)
  },

  
  delete: (req, res) => {
    //find element in shows array based off id
    //splice it out 

    let { id } = req.params
    let spliceMe= shows.find(element=>{+element.id===+id})
    shows.splice(spliceMe, 1)
    res.send(shows)
  },
  
  update: (req, res) => { 
    //take in id from req.params
    // create new object with new values
    //splice out old object, splice in new obj. 

    let {id}= req.params
    let {cityState, date, venue}= req.body
    
    let index= shows.findIndex((element)=> +element.id===+id)

    let itemToUpdate= shows.find((element)=> +element.id===+id)

     itemToUpdate= {
      date: date, 
      cityState: cityState,
      venue: venue,
      id: id
    }

    shows.splice(index, 1, itemToUpdate)

    res.send(shows)
  },

}