// DOM Manipulation

//?Selection of elements
//*getElementById()
//const title = document.getElementById('main-heading');
//onsole.log(title)
//*getElementByClassName()
//const listItem=document.getElementsByClassName('list-items');
//console.log(listItem);
//*getElementByTagName()
//const listItems=document.getElementsByTagName('li');
//console.log(listItems);
//*querySelector()
//! selects the first item with the atrribute if there are more attributes you have to change
//!to the querySelectorAll()
//const container = document.querySelector('div');
//console.log(container);
//*querySelectorAll()
//*selects all the items with the givven atribute

//?Styling
//*Normal styling
// const title = document.getElementById('main-heading');
//!to add styles and you can apply it just to one element
// title.style.color="red";
//*For a group of elements
// const listItems=document.querySelectorAll('.list-items');
// for(let i=0;i<listItems.length;i++){
// listItems[i].style.fontSize='2rem';
// }
//?Creating Elements
// const ul = document.querySelector("ul");
// const li = document.createElement("li");
//*Adding Elements
// ul.append(li);
//*Modifying Text
// li.innerText = "Yacine Laribi"; //*Once

//*Modifying Attributes & Classes
//*Attributes
// li.setAttribute('class','list-items');
// li.removeAttribute('class');
//const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));//*to show the attribute
//*Classes
// li.classList.add("list-items");
//   li.classList.remove('list-items');
//   console.log(li.classList.contains('list-items'));//*to see if it contains the class name given
//*Remove Elements
// li.remove();
//*Execise (Creating a button with a hover)
const button = document.createElement("button");
const container = document.querySelector(".container");
container.append(button);
button.innerText = "Click me!";
button.style.color = "white";
button.style.backgroundColor = "transparent";
button.style.padding = "10px 5px";
button.style.border = "3px solid white";
button.style.borderRadius = "20px";
button.style.margin = "20px 0 0 0 ";
button.style.cursor = "pointer";
button.style.transition = ".3s";
//!The Hover of the Button
//*First Method for the hover
// button.addEventListener("pointerenter", () => {
//   button.style.backgroundColor = "white";
//   button.style.color = "black";
//   button.style.fontWeight = "500";
//   button.style.scale = "1.1";
// });
// button.addEventListener("pointerleave", () => {
//   button.style.backgroundColor = "transparent";
//   button.style.color = "white";
//   button.style.scale = "1";
// });
//*Second Method for the hover 
button.onpointerenter=()=>{
    button.style.backgroundColor='white';
        button.style.color='black';

}
button.onpointerleave=()=>{
    button.style.backgroundColor='transparent';
    button.style.color='white';
}

//? Traverse the DOM 

//*Parent Node Traversal

let ul =document.querySelector('ul');
//!to show the parent
// console.log(ul.parentNode);
// console.log(ul.parentElement);
//to show the grand parents we just double the attributes...

//*Child Node Traversal

// console.log(ul.childNodes);//shows the text and spaces as children
//console.log(ul.lastElementChild);
// console.log(ul.children);//shows the children elements

//*Sibling Node Traversal

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);



