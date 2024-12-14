let boxes = document.querySelectorAll(".box");
let resetbutton= document.querySelector("#resetbutton");
 let newgamebutton = document.querySelector("#new-button");
 let msgContainer = document.querySelector(".msg-container");
 let msg = document.querySelector("#msg");

let turnO = true//playerX, playerO
let  count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        // checkWinner();
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner)
        {
            gameDraw();
        }
    });
});
 const gameDraw = () =>{
    msg.innerText='game was Draw';
    msgContainer.classList.remove("hides");
    disablebox();
 };
const disablebox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
  msg.innerText ='Congrstulations, Winner is you ';
  msgContainer.classList.remove("hides");
  disablebox();
};


const checkWinner = () => {
    for(pattern of winPatterns){
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val);

                showWinner(pos1Val);

            }
        } 
    }
};
const resetGame = ()=>{
    turnO=true;
    count=0;
    enableboxes();
    msgContainer.classList.add("hides");
};
newgamebutton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);