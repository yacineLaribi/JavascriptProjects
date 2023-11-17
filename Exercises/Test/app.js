//*The header part
const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const text = document.createElement("p");
text.innerText = "LOGO";
document.body.append(header);
header.append(nav);
nav.append(text);
nav.append(ul);
ul.append(li1, li2, li3, li4);

ul.children[0].textContent = "accueil";
ul.children[1].textContent = "about me";
ul.children[2].textContent = "log in";
ul.children[3].textContent = "sign up";

//*Styling
document.body.style.padding = "0";
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "#002e63";
header.style.height = "auto";
header.style.padding = "5px 5%";
header.style.borderBottom = "2px solid white ";
nav.style.display = "flex";
nav.style.flexDirection = "row";
nav.style.alignItems = "center";
nav.style.justifyContent = "space-between";
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.color = "white";
ul.style.gap = "5rem";
ul.style.fontSize = "15px";
li1.style.cursor = "pointer";
li2.style.cursor = "pointer";
li3.style.cursor = "pointer";
li4.style.cursor = "pointer";
text.style.fontSize = "25px";
text.style.color = "white";

//*Main Part
const main = document.createElement("main");
main.classList.add("main");
document.body.append(main);

function createDiv(num) {
  const object = document.createElement("div");

  const text1 = document.createElement("p");

  const text2 = document.createElement("p");

  text1.innerHTML = num;
  text1.style.fontSize = "25px";
  text1.style.height = "1%";
  text1.style.fontWeight = "600";
  text2.innerHTML = " product";

  object.appendChild(text1);
  object.appendChild(text2);
  object.classList.add("product");
  object.classList.add(num);
  object.style.backgroundColor = "white";

  const main = document.querySelector(".main");
  main.appendChild(object);
  main.style.padding = "1rem";
  main.style.display = "grid";

  main.style.gridTemplateColumns = "auto auto auto";
  main.style.gridTemplateRows = "auto auto auto";
  main.style.gap = "1rem";
}
//*Creating the products 
for (let i = 1; i < 16; i++) {
  createDiv(i);
}
//*Styling the products and their content 
const product0 = document.querySelectorAll(".product");
for (let i = 0; i < product0.length; i++) {
  product0[i].style.display = "flex";
  product0[i].style.flexDirection = "column";
  product0[i].style.alignItems = "center";
  product0[i].style.justifyContent = "center";
}

//*Footer Part
const footer = document.createElement("footer");
footer.innerHTML = "All Copyright Reserved 2023";

document.body.append(footer);

footer.style.backgroundColor = "black";
footer.style.color = "white";
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.justifyContent = "center";
footer.style.height = "50px";
