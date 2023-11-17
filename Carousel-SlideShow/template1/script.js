const previous=document.querySelector('#previous');
const next=document.querySelector('#next');
const slide=document.querySelector('.slideshow');
const slideImage=document.querySelectorAll('img');
var i,j;

/*next button*/

next.onclick= ()=>{
    for(i=0;i<slideImage.length;i++){
        if(slideImage[i].classList.contains('visible')){
            slideImage[i].classList.remove('visible');
            console.log( slideImage[i])
            if(slideImage[i+1]){
                slideImage[i+1].classList.add('visible');
            }
            else{
                i=0;
                slideImage[i].classList.add('visible');
            }
            break;
            
            
        }
    
    }
}

/*previous button*/
previous.onclick= ()=>{
    for(j=slideImage.length-1;j>=0;j--){
        console.log(slideImage[j-1]);
        if(slideImage[j].classList.contains('visible')){
            slideImage[j].classList.remove('visible');
            console.log( slideImage[j])
            if(slideImage[j-1]){
                slideImage[j-1].classList.add('visible');
            }
            else{
                j=slideImage.length-1;
                slideImage[j].classList.add('visible');
            }
            
            break;
            
        }
    
    }
}