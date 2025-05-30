console.log("welcome to tic toc teo");
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let Turn = "❌";
let over = false;
let bharat = false;
let jangid = false;
let win=false;
//function to change tha turn 
const changeTurn = () => {
    return Turn === "❌" ? "⭕" : "❌"

}
// FUNCTION TO  CHECK FOR WIN
document.querySelector('.jangid').getElementsByTagName('img')[0].style.width = "0px";
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Wale You Win The Game ";
            gameover.play();
            over = true;
            bharat = true;
            if (bharat = true) {
                document.querySelector('.bharat').innerText = `congratulations ` + boxtext[e[0]].innerText + " 🏆";
            }
            jangid = true
             if(jangid=true)
                 {
                     document.querySelector('.jangid').getElementsByTagName('img')[0].style.width="50px";
                 }    
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";

            // document.querySelector('.jangid').style.width="0px"

      win=true;
        }
        
    })
}
//nobody is win function 
const nowin = () => {
    if(win=false){
       document.querySelector('.nowin').innerText="nobody is win "; 
    }
}
// game logic
music.play();
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = Turn;
            Turn = changeTurn();
            audioturn.play();
            checkWin();
            nowin();
            if (!over) {
                document.getElementsByClassName('info')[0].innerText = "Turn For " + Turn;

            }

        }
    })
})

//for reset botton javascript 
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    Turn = "❌";
    over = false;
    jangid = false;
   
    document.querySelector('.bharat').innerText = "";
    document.querySelector('.jangid').getElementsByTagName('img')[0].style.width = "0px";
    document.getElementsByClassName('info')[0].innerText = "Turn for " + Turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
})
