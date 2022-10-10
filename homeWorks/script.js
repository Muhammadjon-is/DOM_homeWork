function ChangeColor() {
    // document.body.style.backgroundColor = "grey";
    // document.querySelector("container").style.color = "white"
//   ! change backgound
     document.body.classList.toggle("colorgrey")
   document.querySelector(".container").classList.toggle("colorgrey")
   document.getElementsByClassName(".card").classList.toggle("colorgrey")
   document.getElementsByClassName(".card1").classList.toggle("colorgrey")

}
//!  change header  
   smartClick = () => document.getElementById('smart').innerHTML = "Welcome to online shop"

//    ColorPrice = () => document.querySelector(".price").style.color = randomColors()
  

// ! every click price will change different oclor 
let price = document.querySelectorAll("#price");
  function ColorPrice() {
    this.style.color = randomColor() 
  }
  price.forEach((pris) => pris.addEventListener("click", ColorPrice))
           

  function randomColor(){
    return ("#" + (Math.floor(Math.random()*16777215).toString(16)));
  };
  
//   ! clicking for images 

var imag = document.querySelectorAll('.images');

function imageRotate() {
  this.classList.toggle("rotated-image")
}
imag.forEach((imgs) => imgs.addEventListener("click", imageRotate))

// !!! this lesson some hard that's why it not perfect I'll try to learn better
   