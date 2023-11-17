const container = document.querySelector(".container");
var i,j;
var letter = ["A", "B", "C", "D", "E", "F", "G", "H"];
//* Adding The Coordinates
//? Letters (columns)
for (j = 0; j <= letter.length - 1; j++) {
  for (i = j; i < 65; i += 8) {
    container.children[i].classList.add(letter[j]);
  }
}
//? Numbers (rows)
for (j = 0; j < 8; j++) {
  for (var i = j * 8; i <= j * 8 + 7; i++) {
    container.children[i].classList.add(8 - j);
  }
}

//! White Pawns Part
const whitePawns = document.querySelectorAll("#white-pawn");
whitePawns.forEach((pawn) => {
  pawn.addEventListener("click", (e) => {
    for (j = 0; j < 8; j++) {
      for (i = 8; i >= 1; i--) {
        if (
          pawn.parentElement.classList.contains(i.toString()) &&
          pawn.parentElement.classList.contains(letter[j])
        ) {
          if (
            container.children[64 - (i + 1) * 8 + j].style.backgroundColor !=
            "red" &&
            container.children[64 - (i + 2) * 8 + j].style.backgroundColor !=
            "red"
          ) {
            container.children[64 - (i + 1) * 8 + j].style.backgroundColor =
              "red";
  //* When the user clicks in the first square 
            container.children[64 - (i + 1) * 8 + j].onclick = () => {
              for (j = 0; j < 8; j++) {
                for (i = 8; i >= 1; i--) {

                  if (
                    pawn &&
                    pawn.parentElement &&
                    pawn.parentElement.classList.contains(i.toString()) &&
                    pawn.parentElement.classList.contains(letter[j])
                  ) {
                  
                    //*To not pass through the other pieces
                    if(container.children[64 - (i + 1) * 8 + j ].children[0])
                    {
                      container.children[64 - (i + 1) * 8 + j ].style.backgroundColor='';
                    }
                    //* if it's clear go forward
                    else{
                    container.children[64 - (i + 1) * 8 + j].appendChild(pawn);
                    pawn.classList.remove();
                    pawn.classList.add("white-piece");
                    container.children[64 - (i + 1) * 8 + j].style.backgroundColor = "";
                    console.log(container.children[64 - (i + 1) * 8 + j]);
                    console.log(i, j);

                    container.children[
                      64 - (i + 2) * 8 + j
                    ].style.backgroundColor = "";
                    container.children[64 - (i + 1) * 8 + j].onclick = null;

                  }}

                }
              }
            };
    //* End of the rules of the click on the first square forward

            container.children[64 - (i + 2) * 8 + j].style.backgroundColor =
              "red";
    //* To remove the highlight of the second square after the first move
              if (i > 2) {
              if (pawn.parentElement.classList.contains(i)) {
                container.children[64 - (i + 2) * 8 + j].style.backgroundColor =
                  "";
              }
            }
          } else {
            container.children[64 - (i + 1) * 8 + j].style.backgroundColor = "";
            container.children[64 - (i + 2) * 8 + j].style.backgroundColor = "";
          }
        }
      }
    }
    console.log(e);
  });
});

//!Black Pawns Part
const BlackPawns = document.querySelectorAll("#pawn");
BlackPawns.forEach((pawn) => {
  pawn.addEventListener("click", (e) => {
    for (j = 0; j < 8; j++) {
      for (i = 1; i <= 8; i++) {
        if (
          pawn.parentElement.classList.contains(i.toString()) &&
          pawn.parentElement.classList.contains(letter[j])
        ) {
          if (
            container.children[64 - (i - 1) * 8 + j].style.backgroundColor !=
            "red" &&
            container.children[64 - (i - 2) * 8 + j].style.backgroundColor !=
            "red"
            ) {
              container.children[64 - (i - 2) * 8 + j].style.backgroundColor =
              "red";
              container.children[64 - (i - 1) * 8 + j].style.backgroundColor =
              "red";
              container.children[64 - (i - 1) * 8 + j].onclick = () => {
                for (var j = 0; j < 8; j++) {
                  for (var i = 1; i <= 8; i++) {
                    if (
                      pawn &&
                      pawn.parentElement &&
                      pawn.parentElement.classList.contains(i.toString()) &&
                      pawn.parentElement.classList.contains(letter[j])
                      ) {
                        
                        
                    //*To not pass through the other pieces
                    if(container.children[64 - (i - 1) * 8 + j ].children[0])
                    {
                      container.children[64 - (i - 1) * 8 + j ].style.backgroundColor='';
                    }
                    //* if it's clear go forward
                    else{
                    container.children[64 - (i - 1) * 8 + j].appendChild(pawn);
                    pawn.classList.add("piece");
                    container.children[
                      64 - (i - 1) * 8 + j
                    ].style.backgroundColor = "";
                    console.log(container.children[64 - (i - 1) * 8 + j]);
                    console.log(i, j);

                    container.children[
                      64 - (i - 2) * 8 + j
                    ].style.backgroundColor = "";
                    container.children[64 - (i - 1) * 8 + j].onclick = null;
                  }
                  }
                }
              }
            }
            //*Eating pawns part 
            /*console.log(container.children[64 - (i - 1) * 8 + j+1])
            if(container.children[64 - (i - 1) * 8 + j+1].children[0]&&
            pawn&&container.children[64 - (i - 1) * 8 + j+1].children[0])
              {
              container.children[64 - (i - 1) * 8 + j+1].style.backgroundColor='red';

              container.children[64 - (i - 1) * 8 + j+1].onclick=()=>{
                
                container.children[64 - (i - 1) * 8 + j+1].children[0].remove()
                container.children[64 - (i - 1) * 8 + j+1].appendChild(pawn);
              }
              console.log(container.children[64 - (i - 1) * 8 + j+1])
            }*/

            if (i <= 6) {
              if (pawn.parentElement.classList.contains(i)) {
                container.children[64 - (i - 2) * 8 + j].style.backgroundColor =
                  "";
              }
            }
          } else {
            container.children[64 - (i - 1) * 8 + j].style.backgroundColor = "";
            container.children[64 - (i - 2) * 8 + j].style.backgroundColor = "";
          }
        }
      }
    }
    console.log(e);
  });
});
//! White Knights Part
const Knights=document.querySelectorAll('#knight');
Knights.forEach((knight)=>{
  knight.onclick=()=>{
        for(j=0;j<8;j++){
          for(i=1;i<=8;i++){
            if(knight&&knight.parentElement&&knight.parentElement.classList.contains(i.toString())&&
            knight.parentElement.classList.contains(letter[j])){
            //*first square rules
            if(container.children[64-(i+2)*8+j+1]&&container.children[64-(i+2)*8+j+1].children[0]==null&&
            container.children[64-(i+2)*8+j+1].classList.contains(i+2)){
              container.children[64-(i+2)*8+j+1].style.backgroundColor!='red'?
              container.children[64-(i+2)*8+j+1].style.backgroundColor='red'
              :container.children[64-(i+2)*8+j+1].style.backgroundColor='';
            }
            //*second square rules
            if(container.children[64-(i+2)*8+j-1]&&container.children[64-(i+2)*8+j-1].children[0]==null&&
            container.children[64-(i+2)*8+j-1].classList.contains(i+2)){
              container.children[64-(i+2)*8+j-1].style.backgroundColor!='red'?
              container.children[64-(i+2)*8+j-1].style.backgroundColor='red'
              :container.children[64-(i+2)*8+j-1].style.backgroundColor='';
            }
            //*third square rules
            if(container.children[64-(i-2)*8+j+1]&&container.children[64-(i-2)*8+j+1].children[0]==null&&
            container.children[64-(i-2)*8+j+1].classList.contains(i-2)){
              container.children[64-(i-2)*8+j+1].style.backgroundColor!='red'?
              container.children[64-(i-2)*8+j+1].style.backgroundColor='red'
              :container.children[64-(i-2)*8+j+1].style.backgroundColor='';
              
            }
            //*fourth square rules
            if(container.children[64-(i-2)*8+j-1]&&container.children[64-(i-2)*8+j-1].children[0]==null&&
            container.children[64-(i-2)*8+j-1].classList.contains(i-2)){
              container.children[64-(i-2)*8+j-1].style.backgroundColor!='red'?
              container.children[64-(i-2)*8+j-1].style.backgroundColor='red'
              :container.children[64-(i-2)*8+j-1].style.backgroundColor='';
              
            }
            //*fifth square rules
            if(container.children[64-(i-1)*8+j-2]&&container.children[64-(i-1)*8+j-2].children[0]==null&&
            container.children[64-(i-1)*8+j-2].classList.contains(i-1)){
              container.children[64-(i-1)*8+j-2].style.backgroundColor!='red'?
              container.children[64-(i-1)*8+j-2].style.backgroundColor='red'
              :container.children[64-(i-1)*8+j-2].style.backgroundColor='';
            }
            //*sixth square rules
            if(container.children[64-(i-1)*8+j+2]&&container.children[64-(i-1)*8+j+2].children[0]==null&&
            container.children[64-(i-1)*8+j+2].classList.contains(i-1)){
              container.children[64-(i-1)*8+j+2].style.backgroundColor!='red'?
              container.children[64-(i-1)*8+j+2].style.backgroundColor='red'
              :container.children[64-(i-1)*8+j+2].style.backgroundColor='';
            }
            //*seventh square rules
            if(container.children[64-(i+1)*8+j-2]&&container.children[64-(i+1)*8+j-2].children[0]==null&&
            container.children[64-(i+1)*8+j-2].classList.contains(i+1)){
              container.children[64-(i+1)*8+j-2].style.backgroundColor!='red'?
              container.children[64-(i+1)*8+j-2].style.backgroundColor='red'
              :container.children[64-(i+1)*8+j-2].style.backgroundColor='';
              
            }
            //*eight square rules 
            if(container.children[64-(i+1)*8+j+2]&&container.children[64-(i+1)*8+j+2].children[0]==null&&
            container.children[64-(i+1)*8+j+2].classList.contains(i+1)){
              container.children[64-(i+1)*8+j+2].style.backgroundColor!='red'?
              container.children[64-(i+1)*8+j+2].style.backgroundColor='red'
              :container.children[64-(i+1)*8+j+2].style.backgroundColor='';
              
            }
      }
    }
  }
}})
