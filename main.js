(function (){
    const inputElm = document.querySelector("#input");
//console.log(inputElm);
const formElm = document.querySelector("form");
//console.log(formElm);
const winScoreElm = document.querySelector(".winscore");
//console.log(winScoreElm);
const BngTeamBtnElm = document.querySelector(".BngTeamBtn");
//console.log(BngTeamBtn);
const BngTeamElm = document.querySelector(".bngTeam");
//console.log(bngTeam);
const IndTeamBtnElm = document.querySelector(".IndTeamBtn");
//console.log(IndTeamBtnElm);
const IndTeamElm = document.querySelector(".indTeam");
//console.log(IndTeamElm);
const ResetBtnElm = document.querySelector(".ResetBtn");
//console.log(ResetBtnElm);
const BngClickElm = document.querySelector('.Bng');
//console.log(BngClick);
const IndClickElm = document.querySelector('.Ind');
// console.log(IndClick);
const BngClickedCountElm = document.querySelector('.bndWin');
//console.log(BngClickedCountElm);
const IndClickedCountElm = document.querySelector('.indWin');
//console.log(IndClickedCountElm);

let winScore = 0;
let BngScore = 0;
let IndScore = 0;
let BngClick = 0;
let IndClick = 0;

let turn = "Bangladesh Team"

winScoreElm.textContent=winScore;
BngTeamElm.textContent = BngScore;
IndTeamElm.textContent = IndScore;

function generateRanNum(max){
    return Math.floor(Math.random() * max + 1);
}

formElm.addEventListener("submit",e=>{
    e.preventDefault();
    const inputVal = +input.value;
    if(inputVal === '' || inputVal < 1){
        if(!document.querySelector('.invalid-input')){
            formElm.insertAdjacentHTML('beforebegin','<p class="invalid-input">Please input Valid Number <img src="../Project/Images/Danger.jpg`" alt="" /> </p>')
            BngTeamBtnElm.setAttribute('disabled','disabled');
            IndTeamBtnElm.setAttribute('disabled','disabled');
        }
        
    }
    else{
        if(document.querySelector('.invalid-input')){
            document.querySelector('.invalid-input').remove();
        }
        winScore = +input.value;
        winScoreElm.textContent = winScore;
        inputElm.value = '';
        console.log(typeof input.value);
        initialPlayState();
    }
    
    
})

BngTeamBtnElm.addEventListener("click",e=>{
    
     if(turn === "Bangladesh Team"){
         BngClick++;
         BngClickedCountElm.textContent = BngClick;
        BngScore = generateRanNum(winScore);
        BngTeamElm.textContent = BngScore;
        turn = "Indian Team";
        BngTeamBtnElm.setAttribute("disabled", "disabled");
        IndTeamBtnElm.removeAttribute("disabled");
       
        checkWinner();
         }
  
})
function checkWinner() {
  
    const BngWinner = winScore === BngScore;
    const IndWinner = winScore === IndScore;

    if(BngWinner || IndWinner){
        BngTeamBtnElm.setAttribute("disabled", "disabled");
        IndTeamBtnElm.setAttribute("disabled", "disabled");

    }
  
    displayWinner(BngWinner, IndWinner);

}
function displayWinner(BngWinState,IndWinState){
    if(BngWinState ){
        formElm.insertAdjacentHTML('beforebegin',
        
         '<p class="winnerMes"> <span class="winner">Bangladesh Win World Cup!</span>  <img src="Images/winner.gif" alt="" /></p>'

        
         )
    }
    else if(IndWinState )  {
        formElm.insertAdjacentHTML('beforebegin',
        '<p class="winnerMes"> <span class="winner">India Win World Cup!</span> <img src="Images/winner.gif" alt="" /> </p>')
    }
}

IndTeamBtnElm.addEventListener("click",e=>{
    if(turn === "Indian Team"){
        IndClick++;
        IndClickedCountElm.textContent = IndClick;
        IndScore = generateRanNum(winScore);
        IndTeamElm.textContent = IndScore;
        turn = "Bangladesh Team";
        IndTeamBtnElm.setAttribute("disabled", "disabled");
        BngTeamBtnElm.removeAttribute("disabled");
       
    }


})

ResetBtnElm.addEventListener("click", e =>{
    console.log('Clicked');
    winScore = 0;
    initialPlayState();
    
})
function initialPlayState(){
    BngScore = 0;
    IndScore = 0;
    turn = "Bangladesh Team"
    winScoreElm.textContent=winScore;
    BngTeamElm.textContent = BngScore;
    IndTeamElm.textContent = IndScore;
    BngTeamBtnElm.removeAttribute("disabled");
    IndTeamBtnElm.removeAttribute("disabled");
    if(document.querySelector('.winnerMes')){
        document.querySelector('.winnerMes').remove();
    }
    
}
    

    

})();
