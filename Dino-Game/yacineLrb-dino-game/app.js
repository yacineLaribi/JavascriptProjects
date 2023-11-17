const container =document.querySelector('.container');
const ground=document.querySelector('.ground');
const dino1=document.querySelector('.dino-0');
const dino2=document.querySelector('.dino-1');
const runner=document.querySelectorAll('.runner');
const startBtn=document.querySelector('#start');
const score=document.querySelector('.score');
const cactus=document.querySelectorAll('.cactus');
let i=0,j=0,c=0;
start.onclick=()=>{
    if(ground.classList.contains('animation')){
        ground.classList.remove('animation');
        dino1.style.animation='none';
        dino2.style.animation='none';
        container.onclick=null;
          }
    else{
        ground.classList.add('animation');
        dino1.style.animation='appear-disappear .5s infinite 0s linear';
        dino2.style.animation='disappear-appear .5s infinite 0s linear';
        setInterval(
            ()=>{ if(ground.classList.contains('animation')){
                score.innerHTML=i;
                 i=i+1;
            } else{
                score.innerHTML=i;
        }
        }
    ,100);

container.onclick=()=>{ 
        runner.forEach((dino)=>{
            
            setTimeout(()=>{
                dino.style.bottom='90px';
            },150);
            setTimeout(()=>{
                dino.style.bottom='5px';
            },430);
            
        })
}
    }
}
