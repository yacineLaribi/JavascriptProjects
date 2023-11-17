//*add button
const addButton=document.getElementById('addbtn');
const form =document.getElementById('form');

addButton.addEventListener("click",()=>{
    if(form.classList.contains('hidden')){
    form.classList.remove('hidden');}
    else{
        form.classList.add('hidden')
    }
})
//*Add a Quote Part
function returnValue() {
  let input1 = document.getElementById("quoteInput").value;
  let input2 = document.getElementById("authorInput").value;
  const box = document.createElement("div");
  box.classList.add("box-");
  const quote = document.createElement("div");
  quote.classList.add("quote");
  quote.innerHTML = input1;
  const author = document.createElement("div");
  author.classList.add("author");
  author.innerHTML = input2;
  box.append(quote, author);
  const boxes = document.querySelector(".box");
  boxes.append(box);
  box.style.display = "none";
  console.log(input1);
  window.confirm("Your QUOTE has been successfully added by Walid !");

}
//*Declarations part
const submit=document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  returnValue();
});

//*Quotes generaor part 
const button = document.getElementById("btn");
const boxes = document.querySelector(".box");
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var i,
  j = 0;

button.onclick = () => {
  i = randomRange(0, boxes.children.length - 1);
  if (i != j) {
    console.log(i);
    boxes.children[j].style.display = "none";
    boxes.children[i].style.display = "block";
    j = i;
  } else {
    i = randomRange(0, boxes.children.length - 1);
    boxes.children[j].style.display = "none";
    boxes.children[i].style.display = "block";
    j = i;
  }
};

