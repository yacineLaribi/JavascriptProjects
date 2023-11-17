const submit = document.getElementById("submit");
function addValue() {
    let text = document.getElementById("text-input").value;
    const ul = document.querySelector("ul");
    const addToList = document.createElement("li");
    if (text != "") {
        addToList.innerHTML = text +"<span> X </span>";
        ul.append(addToList);
    } 
    else {
        window.alert("Enter something in the input");
    }
    
    const removeButton=document.querySelectorAll('span');
    for(let i=0;i<removeButton.length;i++){
        removeButton[i].onclick=()=>{
       // removeButton[i].parentElement.classList.add("hidden");
        removeButton[i].parentElement.remove();
    }
    }
}

submit.addEventListener("click", function (event) {
    event.preventDefault();
    addValue();
});

