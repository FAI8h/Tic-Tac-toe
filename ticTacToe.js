let boxes = document.querySelectorAll('.box')

let resetButton = document.querySelector('#reset-btn')

let newGame = document.querySelector('#New-game');

let messageClass = document.querySelector('.msg-content'); 

let message = document.querySelector('#msg');

// let options = document.querySelectorAll("#player-Ai");




let turnX = true;

let winnings = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [0,3,6],
    [2,4,6],
    [0,4,8],
]


const enablebtn = () => {
    console.log("hey");
    
    for(box of boxes){
        box.disabled = false;
        box.innerHTML = '';
    }
};

const disablebtn = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
// options.addEventListener('selected',enablebtn)

const cheackWinner = (Winner) => {
    message.innerHTML = `Winner is ${Winner}`;
    messageClass.classList.remove('hide')
    disablebtn()
}

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        // console.log("Hey i am touched");
        if(turnX === true){
            box.innerHTML = "X";
            turnX = false;

        }else {
            box.innerHTML = "O";
            turnX = true;
        }
        box.disabled = true;

        cheackWins()
        
    })
});



const resetGme = () => {
    turnX = true;
    messageClass.classList.add("hide");
    enablebtn();

}


const cheackWins = () => {
    for(wins of winnings){
        let pos1 = boxes[wins[0]].innerHTML
        let pos2 = boxes[wins[1]].innerHTML
        let pos3 = boxes[wins[2]].innerHTML
        
        
        if(pos1 != '' && pos2 != '' && pos3 != ''){

            if(pos1 === pos2 && pos2 === pos3){
                // console.log("Winner");
                
                cheackWinner(pos1);
            }
            
            
            
        }
        
    }
    
    
}

resetButton.addEventListener('click',resetGme);
// newGame.addEventListener('click', resetGme)

