const cases=document.querySelectorAll('.case');
const h3=document.querySelector('h3');
const gameOver=document.querySelector('.game-over');
const button=document.querySelector('button');
let j=0;

cases.forEach((casee)=>{
        
        function XO(){
            j=j+1;//*To determine the tour of players ('x' then 'o' then 'x' then ...)
        if(casee.innerHTML==''){
            if(j%2!=0){
                casee.innerHTML='X';
                casee.classList.add('X');
            }
            else {
                casee.innerHTML='O';
                casee.classList.add('O');
            }    
         if(j==9){
                gameOver.classList.remove('hidden'); 
                h3.innerHTML="It's a draw man you can't play";
            }
        }
        
        //*The Rules of winnnig
        //*first rule (rows)
        for(var i=0;i<9;i+=3){
        if(cases[i].classList.contains('X')&&cases[i+1].classList.contains('X')&&cases[i+2].classList.contains('X')){
           gameOver.classList.remove('hidden');//*To show GAME OVER
            h3.innerHTML='The player "X" Wins .';//*To determine which one wins
        }
        else if(cases[i].classList.contains('O')&&cases[i+1].classList.contains('O')&&cases[i+2].classList.contains('O')){
            gameOver.classList.remove('hidden');
            h3.innerHTML='The player "O" Wins .';
        }
        }
        //*second rule (columns)
        for(var i=0;i<3;i+=1){
            if(cases[i].classList.contains('X')&&cases[i+3].classList.contains('X')&&cases[i+6].classList.contains('X')){
                gameOver.classList.remove('hidden');
                h3.innerHTML='The player "X" Wins .';
                
             }
             else if(cases[i].classList.contains('O')&&cases[i+3].classList.contains('O')&&cases[i+6].classList.contains('O')){
                gameOver.classList.remove('hidden'); 
                h3.innerHTML='The player "O" Wins .';
             } 
        }
        //*third rule (diagonales)
            if(cases[0].classList.contains('X')&&cases[4].classList.contains('X')&&cases[8].classList.contains('X')){
                gameOver.classList.remove('hidden');
                h3.innerHTML='The player "X" Wins .';
             }
             else if(cases[0].classList.contains('O')&&cases[4].classList.contains('O')&&cases[8].classList.contains('O')){
                gameOver.classList.remove('hidden'); 
                h3.innerHTML='The player "O" Wins .';
             } 
             else if(cases[2].classList.contains('X')&&cases[4].classList.contains('X')&&cases[6].classList.contains('X')){
                gameOver.classList.remove('hidden');
                h3.innerHTML='The player "X" Wins .';
             }
             else if(cases[2].classList.contains('O')&&cases[4].classList.contains('O')&&cases[6].classList.contains('O')){
                gameOver.classList.remove('hidden'); 
                h3.innerHTML='The player "O" Wins .';
                
             }
            
        
            }
    //*The playing process 
    casee.addEventListener("click",XO);
    //*The Button of playing again 
    button.onclick=()=>{location.reload()}
});