var numbers= document.getElementsByTagName("li");



// loop over array
// double every number in array. 

function double() {
  
  for (i=0; i<numbers.length; i++) {
   numbers[i].innerText = +numbers[i].innerText*2
    // numbers[i]
  }
  return numbers
}



const header = document.getElementById("header")

header.innerText="yay"

header.style.textAlign="center"



function randomColor(){
  var num1= Math.floor(Math.random()*255)
  var num2= Math.floor(Math.random()*255)
  var num3= Math.floor(Math.random()*255)
const color= `rgb(${num1}, ${num2}, ${num3})`

header.style.backgroundColor= color

}

setInterval(randomColor, 1000)

// on click of button set color to typed color

const boxColor= document.getElementById("box-color")
const boxColorSetter= document.getElementById("box-color-setter")




function setColor() {
  boxColor.style.backgroundColor=boxColorSetter.value

}

console.log(document.getElementsByClassName("yellow"))


// add or remove class from button

var text = document.getElementById("paragraph")

function toggle(){
  if(!text.className){
  text.className="text"
} else{
    text.className=""
  }
}