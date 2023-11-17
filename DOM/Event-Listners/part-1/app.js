//? Event Listners

//*element.addEventListner("event",function)
//*Click
const buttonTwo = document.querySelector(".btn-2");
function alertButton() {
  alert("i am a developer too !");
}
buttonTwo.addEventListener("click", alertButton);
//*MouseOver
const box3 = document.querySelector('.box3');
function changeBgColor(){
    box3.style.backgroundColor ='blue';
}
box3.addEventListener('mouseover',changeBgColor);


