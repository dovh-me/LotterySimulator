// Didn't use prompt cause its boring

var userNumFields = [
    document.getElementById("num1"),
    document.getElementById("num2"),
    document.getElementById("num3"),
    document.getElementById("num4"),
    document.getElementById("num5"),
    document.getElementById("num6")
];

const lotteryButtons = [
    document.getElementById("drawnum1"),
    document.getElementById("drawnum2"),
    document.getElementById("drawnum3"),
    document.getElementById("drawnum4"),
    document.getElementById("drawnum5"),
    document.getElementById("drawnum6"),
];

const userButtons  = [
    document.getElementById("usernum1"),
    document.getElementById("usernum2"),
    document.getElementById("usernum3"),
    document.getElementById("usernum4"),
    document.getElementById("usernum5"),
    document.getElementById("usernum6"),
];


var userNums = [];
const validateBtn = document.getElementById("validateBtn");
const drawBtn = document.getElementById("drawLottery");

validateBtn.addEventListener("click", isNumsValid);
drawBtn.addEventListener("click", drawLottery);


function randonNumGen(){
    var drawNumbers = [];
    for(var i = 1; i <= 8;i++){
        var lotteryNum = Math.floor(Math.random() * 59) + 1;
        if(!drawNumbers.includes(lotteryNum)) drawNumbers.push(lotteryNum);
    }
    return drawNumbers;
}

function isNumsValid(){
    var isValid;
    var correctFields = 0;
    for (var i = 0; i < userNumFields.length; i++) {
        var userNum = parseInt(userNumFields[i].value);
        if(userNums.includes(userNum) || isNaN(userNum) || userNum < 1 || userNum > 59){
            isValid = false; 
            var input = parseInt(userNumFields[i].value);
            userNumFields[i].style.border = "2px solid red";
            userNumFields[i].style.backgroundColor = "#ffcccb";
        }else{
            userNumFields[i].style.border = "2px solid green";
            userNumFields[i].style.backgroundColor = "#90EE90";
            correctFields++;
        }
        userNums[i] = userNum;
    }
    
    if(correctFields === userNumFields.length){
        drawBtn.removeAttribute("disabled");
    }else{
        userNums = [];
    }

}

function drawLottery(){
    document.getElementById("lotteryForm").style.display = "none";
    document.getElementById("lotteryContainer").style.display = "block";
    const lotteryNums = randonNumGen();
    console.log(lotteryNums);
    bonusNum = lotteryNums.pop();
    for(var i = 0; i < userNums.length; i++){
        lotteryButtons[i].innerHTML = lotteryNums[i] > 9 ?lotteryNums[i]: "0" + lotteryNums[i];
        userButtons[i].innerHTML = userNums[i] > 9 ?userNums[i]: "0" + userNums[i];
        if(lotteryNums.includes(userNums[i])){
            userButtons[i].classList.add("highlightWin");
        }else if(userNums[i] == bonusNum){
            userButtons[i].classList.add("highlightBonusWin");
        }
    }
    document.getElementById("drawnum7").innerHTML = bonusNum > 9 ? bonusNum: "0" + bonusNum;
}