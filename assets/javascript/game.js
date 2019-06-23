//This makes sure, the code will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function() {
//Global Variables
let num1;
let num2;
let num3;
let num4;
let computerNum;
let userTotal =0;
let wins = 0;
let losses = 0;
let roundOver = false;

// Function to generate  random int within a given range
// Returns minimum number up to but not including maximum number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

// Random values for crystal 
    num1 = getRandomInt(1, 15);
    num2 = getRandomInt(1, 15);
    num3 = getRandomInt(1, 15);
    num4 = getRandomInt(1, 15);

 // Random values for Target score
 computerNum= getRandomInt(21, 71);

 //Display target score in html
 $("#targetNumber").html(computerNum);

//  $('.crystals').on('click', '.crystal',function(){
//     console.log($(this)[0].id);
//     console.log("I am clicked c1");
//        userTotal += num1; 
//     $("#user-Score").html(userTotal);
//     checkStatus();
// });

$('#C1').on('click',function(){
    userTotal += num1; 
    $("#user-Score").html(userTotal);
    checkStatus();
});

$('#C2').on('click',function(){
    userTotal += num2;   
    $("#user-Score").html(userTotal);
    checkStatus();
});

$('#C3').on('click',function(){
    userTotal += num3;
    $("#user-Score").html(userTotal);
    checkStatus();
});

$('#C4').on('click',function(){
    userTotal += num4;
    $("#user-Score").html(userTotal);
    checkStatus();
});

//Main Logic
function checkStatus() {
    if (!roundOver){
            if (userTotal === computerNum){
                wins++;
                $("#DisplayResult").html("Yay!!! you win");
                roundOver = true;
                setTimeout(reset, 2000);
}
            else if (userTotal > computerNum){
                losses++;
                $("#DisplayResult").html("Oops! You Lose");
                roundOver = true;
                setTimeout(reset, 2000); 
                //setTimeout(function() {reset()}, 5000);// delaying the reset
}
//Display stats
    $('#win-Tracker').text(wins);
    $("#Loss-Tracker").text(losses);
}
}
//Reset Game
function reset() {
    num1 = getRandomInt(1, 15);
    num2 = getRandomInt(1, 15);
    num3 = getRandomInt(1, 15);
    num4 = getRandomInt(1, 15);
    computerNum= getRandomInt(21, 71);
    $("#targetNumber").html(computerNum);
    userTotal =0;
    $("#user-Score").html(userTotal);
    $("#DisplayResult").html("Good Luck again!!!");
    roundOver = false;
 }
});