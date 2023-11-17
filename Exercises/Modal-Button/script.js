const button = document.querySelector('.modal-btn');
const content= document.querySelector('.modal-content');
const backdropFilter= document.getElementById('backdrop');
const cancelButton= document.querySelector('.cancel');
function cancel(){
        content.style.display='none';
        backdropFilter.classList.remove('backdrop');
}
button.onclick=()=>{
    content.style.display='block';
    backdropFilter.classList.add('backdrop');
}
backdropFilter.onclick=cancel;
cancelButton.onclick=cancel;