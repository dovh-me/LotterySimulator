var usernum1 = document.getElementById("usernum1");
var usernum2 = document.getElementById("usernum2");
var usernum3 = document.getElementById("usernum3");
var usernum4 = document.getElementById("usernum4");
var usernum5 = document.getElementById("usernum5");
var usernum6 = document.getElementById("usernum6");

var drawNumbers = [];
var bonusNum;
for(var i = 1; i <= 7;){
    var lotteryNum = Math.floor(Math.random() * 59) + 1;
    if(!drawNumbers.includes(lotteryNum)){

        if(i === 7) bonusNum = lotteryNum;
        else drawNumbers.push(lotteryNum);
        
        var elementName = "drawnum" + parseInt(i);
        lotteryNum = lotteryNum < 10? "0" + lotteryNum : lotteryNum;
        document.getElementById(elementName).innerHTML = lotteryNum;
        i++;
    }
}

var usernums = [usernum1,usernum2,usernum3,usernum4,usernum5,usernum6];

usernums.forEach((element) => {
    if (drawNumbers.includes(parseInt(element.innerHTML))){
        element.classList.add("highlightWin");
    }else if (element.innerHTML == bonusNum){
        element.classList.add("highlightBonusWin");
    }
});
