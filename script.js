const body = document.getElementById("body");
const mainGridContainer = document.getElementById("main-grid-container");
const gridItems = document.querySelectorAll(".grid-item");
const turnText = document.getElementById("turn-text");
let turn = "X";

const winAlertContainer = document.getElementById("win-alert-container");
const winnerSpan = document.getElementById("winner-span");
const playAgainButton = document.getElementById("play-again-button");

const themeButton = document.getElementById("theme-button");
const themeIcon = document.getElementById("theme-icon");
const textHeader = document.querySelectorAll(".text-header");
const winAlertBox = document.getElementById("win-alert-box");

let stateTheme = "LIGHT";

const dark0 = "#000";
const dark1 = "#121212";
const dark2 = "#222";
const dark3 = "#333";

const light0 = "#fff";
const light1 = "#ddd";


mainGridContainer.addEventListener("click", function mark(event){
    let selectedItem = event.target;

    if(selectedItem !== mainGridContainer && !selectedItem.classList[1]){
        selectedItem.classList.add(turn);
        selectedItem.textContent = turn;

        if(turn == "X"){
            turnText.textContent = "O";
            turnText.style.color = "#f33";
            winCheck(turn);
            turn = "O";
        }else{
            turnText.textContent = "X";
            turnText.style.color = "#33f";
            winCheck(turn);
            turn = "X";
        };

                

    }

});

themeButton.addEventListener("click", function changeTheme(){
    if(stateTheme == "LIGHT"){
        stateTheme = "DARK";

        body.style.backgroundColor = dark1;

        mainGridContainer.style.backgroundColor = light0;
        mainGridContainer.style.border = `5px solid ${light0}`;
        gridItems.forEach(element => element.style.backgroundColor = dark2);

        textHeader.forEach(element=> element.style.color = light0);
        themeIcon.style.color = light0;
        themeIcon.textContent = "light_mode";
        themeButton.style.backgroundColor = dark2;
        themeButton.style.border = `3px solid ${light0}`;

        winAlertBox.style.backgroundColor = dark1;
        winAlertBox.style.border = `5px solid ${light0}`;
        winnerSpan.style.color = light0;
        playAgainButton.style.backgroundColor = dark2;
        playAgainButton.style.color = light0;
        playAgainButton.style.border = `3px solid ${light0}`;
    }
    else{
        stateTheme = "LIGHT";

        body.style.backgroundColor = light1;

        mainGridContainer.style.backgroundColor = dark0;
        mainGridContainer.style.border = `5px solid ${dark0}`;
        gridItems.forEach(element => element.style.backgroundColor = light0);

        textHeader.forEach(element=> element.style.color = dark0);
        themeIcon.style.color = dark0;
        themeIcon.textContent = "dark_mode";
        themeButton.style.backgroundColor = light0;
        themeButton.style.border = `3px solid ${dark0}`;

        winAlertBox.style.backgroundColor = light0;
        winAlertBox.style.border = `5px solid ${dark0}`;
        winnerSpan.style.color = dark0;
        playAgainButton.style.backgroundColor = light1;
        playAgainButton.style.color = dark0;
        playAgainButton.style.border = `3px solid ${dark0}`;
    }
})

playAgainButton.addEventListener("click", ()=>reset());

themeButton.addEventListener(("mouseover"),()=> mouseOver(themeButton));
themeButton.addEventListener(("mouseout"),()=> mouseOut(themeButton));

playAgainButton.addEventListener(("mouseover"),()=> mouseOver(playAgainButton));
playAgainButton.addEventListener(("mouseout"),()=> mouseOut(playAgainButton));

mainGridContainer.addEventListener(("mouseover"),(event)=>{
    let selectedItem = event.target;
    if(selectedItem !== mainGridContainer){
        mouseOver(selectedItem);
    }
});

mainGridContainer.addEventListener(("mouseout"),(event)=>{
    let selectedItem = event.target;
    if(selectedItem !== mainGridContainer){
        mouseOut(selectedItem);
    }
});




const winCheck = (turnWinCheck)=>{
    let matriz = [];
    gridItems.forEach((element)=>{
        matriz.push(element.classList[1])
    })
    if(matriz[0] == turnWinCheck && matriz[1] == turnWinCheck && matriz[2] == turnWinCheck ||
        matriz[3] == turnWinCheck && matriz[4] == turnWinCheck && matriz[5] == turnWinCheck ||
        matriz[6] == turnWinCheck && matriz[7] == turnWinCheck && matriz[8] == turnWinCheck ||
        matriz[0] == turnWinCheck && matriz[3] == turnWinCheck && matriz[6] == turnWinCheck ||
        matriz[1] == turnWinCheck && matriz[4] == turnWinCheck && matriz[7] == turnWinCheck ||
        matriz[2] == turnWinCheck && matriz[5] == turnWinCheck && matriz[8] == turnWinCheck ||
        matriz[0] == turnWinCheck && matriz[4] == turnWinCheck && matriz[8] == turnWinCheck ||
        matriz[2] == turnWinCheck && matriz[4] == turnWinCheck && matriz[6] == turnWinCheck
        ){
        console.log(`${turnWinCheck} YOU'VE WON`)
        winAlert(turnWinCheck)
    }
    // else if(matriz[0] && matriz[1] && matriz[2] && matriz[3] && matriz[4] && matriz[5] && matriz[6] && matriz[7] && matriz[8]){
    //     console.log("DRAW")
    // }
    else if(matriz.every((element) => element)){
        drawAlert()
    }
    
};

const winAlert = (turnWinCheck)=>{
    winAlertContainer.style.display = "flex";
    winnerSpan.textContent = `${turnWinCheck} YOU WIN`;
    winnerSpan.classList.add(turnWinCheck);
    if(winnerSpan.textContent.includes("X")){
        winAlertContainer.style.backgroundColor = "rgba(51,51,255,.75)";
        winnerSpan.style.color = "#33f";
    }else{
        winAlertContainer.style.backgroundColor = "rgba(255,51,51,.75)";
        winnerSpan.style.color = "#f33";
    }

    winAlertContainer.style.animationName = "showUp";
}

const drawAlert = ()=>{
    console.log("IT'S A DRAW")
    winAlertContainer.style.display = "flex";
    winnerSpan.textContent = "IT'S DRAW";
    if(stateTheme=="DARK"){winnerSpan.style.color = light0;}
    else{winnerSpan.style.color = dark0;}
    winAlertContainer.style.backgroundColor = "rgba(127,127,127,.75)";
}

const reset = ()=>{
    turn = "X";
    turnText.textContent = "X";
    turnText.style.color = "#33f";

    gridItems.forEach((element)=>{
        element.classList.toggle("X",false);
        element.classList.toggle("O",false);
        element.textContent = "";
    })
    winAlertContainer.style.display = "none";
}

const mouseOver = (element)=>{
    if(stateTheme == "DARK"){element.style.backgroundColor = dark3;}
    else{element.style.backgroundColor = light1;}
}

const mouseOut = (element)=>{
    if(stateTheme == "DARK"){element.style.backgroundColor = dark2;}
    else{element.style.backgroundColor = light0;}
}