let id = 1
let shows = [
  {
    imgUrl: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_651,q_75,w_979/https://assets.simpleviewinc.com/simpleview/image/upload/crm/utahvalley/The-Velour_309f1a9d-5056-a36a-0b5c11bf55b3697b.jpg',
    date: '1/1/19',
    venue: 'The Velour',
    cityState: 'Provo, UT',
    id: id++,
  },
  {
    imgUrl:'https://media.deseretdigital.com/file/8c58d70965?type=jpeg&quality=55&c=15&a=4379240d' ,
    date: '2/1/19',
    venue: 'The Viv',
    cityState: 'Salt Lake City, UT',
    id: id++,
  },
  {
    imgUrl: 'http://static-34.sinclairstoryline.com/resources/media/267b08e7-ccb9-44c2-ad9d-9889731a6315-large16x9_VirginiaBeach.jpg?1519239266832',
    date: '3/1/19',
    venue: 'Kilby Court',
    cityState: 'Denver, CO',
    id: id++,
  },
  {
    imgUrl: 'https://lastfm-img2.akamaized.net/i/u/ar0/a09155d6ed343d12b30f2064d670da7e.jpg',
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
      imgUrl: req.body.imgUrl,
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
    let {cityState, date, venue, imgUrl}= req.body
    
    let index= shows.findIndex((element)=> +element.id===+id)

    let itemToUpdate= shows.find((element)=> +element.id===+id)

     itemToUpdate= {
      date: date, 
      cityState: cityState,
      venue: venue,
      id: id,
      imgUrl: imgUrl,
    }

    shows.splice(index, 1, itemToUpdate)

    res.send(shows)
  },

}