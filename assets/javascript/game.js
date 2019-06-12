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

//Crystal's value number pool
let arr =[1,2,3,4,5,6,7,8,9,10,11];
//Computer number pool -- TargetScore
let arr2 =[21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]; 

// Random values for crystal 
 num1 = arr[Math.floor(Math.random()*arr.length)];
 num2 = arr[Math.floor(Math.random()*arr.length)];
 num3 = arr[Math.floor(Math.random()*arr.length)];
 num4 = arr[Math.floor(Math.random()*arr.length)];

 // Random values for Target score
 computerNum = arr2[Math.floor(Math.random()*arr2.length)];
 //Display target score in html
 $("#targetNumber").html(computerNum);

$('#C1').on('click',function(){
    console.log("I am clicked c1");
    userTotal += num1; 
    $("#user-Score").html(userTotal);
    checkStatus();
});

$('#C2').on('click',function(){
    console.log("I am clicked c2");
    userTotal += num2;   
    $("#user-Score").html(userTotal);
    checkStatus();
});

$('#C3').on('click',function(){
    console.log("I am clicked c3");
    userTotal += num3;
    $("#user-Score").html(userTotal);
    checkStatus();
});

$('#C4').on('click',function(){
    console.log("I am clicked c4");
    userTotal += num4;
    console.log(userTotal);
    $("#user-Score").html(userTotal);
    checkStatus();
});

//Main Logic
function checkStatus() {
if (userTotal === computerNum){
    //alert ("Yay!!! you win");
    console.log("Yay!!! you win");
    wins++;
    //alert("Yay!!! you win");
    $("#DisplayResult").html("Yay!!! you win");
    setTimeout(reset, 2000);
}
else if (userTotal > computerNum){
    console.log("Oops! You Lose");
    losses++;
    //setTimeout(function() {reset()}, 5000);// delaying the reset
    //setTimeout(reset, 2000); // same thing as above
    $("#DisplayResult").html("Oops! You Lose");
    setTimeout(reset, 2000);
   // alert("Oops! You Lose");
    

}
//Display stats
$('#win-Tracker').text(wins);
$("#Loss-Tracker").text(losses);
}
//Reset Game
function reset() {
 num1 = arr[Math.floor(Math.random()*arr.length)];
 num2 = arr[Math.floor(Math.random()*arr.length)];
 num3 = arr[Math.floor(Math.random()*arr.length)];
 num4 = arr[Math.floor(Math.random()*arr.length)];
 computerNum = arr2[Math.floor(Math.random()*arr2.length)];
 $("#targetNumber").html(computerNum);
 userTotal =0;
 $("#user-Score").html(userTotal);
 $("#DisplayResult").html("Good Luck again!!!");
}

//Need to figure out how to set timeout to display final total before resetting the game! working in mozilla but not in chrome!! WHY!!!!

});