

//function addTodo

//runs when button is clicked

// get the value out of the input box

// create new html/text that's inserted into the UL 

//


let button= document.getElementsByTagName("button")[0]
let ul= document.getElementById("list")


button.addEventListener("click", function(){
  let text= document.getElementById("text").value
  
  //add text value to ul. 
  let newLi=  document.createElement("li")
  newLi.innerHTML= "<button id='remove'>X</button>";
  
  ul.appendChild(newLi)
  
  let newText=newLi.appendChild(document.createTextNode(`${text}`))
  
})


document.getElementById("remove").addEventListener("click", function(){
  
  console.log("hello")
})




// function addTodo(){
//   let ul= document.getElementById("list")
//   let inputV=document.getElementsByTagName("input")[0].value
//   let newItem= document.createElement("li")
//   // let newItemText= inputV
//   newItem.appendChild(inputV)
//   ul.appendChild(newItem)

//   // ul.innerHTML+=`<li>${inputV}</li>` 
// }




// function remove todo



