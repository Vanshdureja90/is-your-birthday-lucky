var inputDOB = document.querySelector("#dob");

var inputLuckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check");
var outputResult = document.querySelector("#result");


checkNumber.addEventListener("click", checkBirthDateIsLucky)

function checkBirthDateIsLucky(){
    var dob = inputDOB.value;
    const sum = calculateSum(dob);
    checkLuck(sum, inputLuckyNumber.value);
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    console.log(dob);
    let sum = 0;
    for(let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function checkLuck(sum, inputLuckyNumber){
    if(sum%inputLuckyNumber===0){
        outputResult.value=("your birthday is Lucky");
    }else{
        outputResult.value=("your birthday is not that lucky!");
    }
}


