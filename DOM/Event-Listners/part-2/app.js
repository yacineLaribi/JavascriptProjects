//*Removing and Returning Something 
const button =document.querySelector('.reveal-btn');
const content=document.querySelector('.hidden-content');
//*First Method 
// button.onclick=()=>{
//     content.style.display=='block'?content.style.display='none':content.style.display='block';
// }
//*Second Method
//*By adding and removing a class name 
function revealContent(){
    if ( content.classList.contains('reveal-btn')){
        content.classList.remove('reveal-btn');
    }
    else{
        content.classList.add('reveal-btn');
    }
}
button.addEventListener('click',revealContent);

//! Event Probagation 
button.addEventListener('mousemove',(e)=>{
    console.log(e);//to see the parameters of the event
})
//! Event Delegation 
/*it allows users to append a SINGLE event listner to a parent element that adds
to all of its present And fututre descendants that match a selector .*/
