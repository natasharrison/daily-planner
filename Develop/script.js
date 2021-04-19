var currentDay = moment().format('MMMM Do YYYY');

// current hour in military time
var currentHour = moment().format('H');

var textarea = document.querySelector("#task-textarea").value;

var saveButtonEl = document.querySelector("#saveBtn");

// Hour variables 
var nineEl = document.querySelector("#timeNine").innerText;
var tenEl = document.querySelector("#timeTen").innerText;
var elevenEl = document.querySelector("#timeEleven").innerText;
var twelveEl = document.querySelector("#timeTwelve").innerText;
var oneEl = document.querySelector("#timeOne").innerText;
var twoEl = document.querySelector("#timeTwo").innerText;
var threeEl = document.querySelector("#timeThree").innerText;
var fourEl = document.querySelector("#timeFour").innerText;
var fiveEl = document.querySelector("#timeFive").innerText;

// display current date 
window.onload = function (){
    document.getElementById('currentDay').innerHTML = currentDay;
};

$('#saveBtn').click(function(){
    localStorage.setItem("task-textarea", JSON.stringify(textarea));
}
);

// // save to local storage when button is clicked 
// saveButtonEl.addEventListener("click", function(){
//     alert("Button clicked");
// });




// $("#taskInput .saveBtn").click(function(){
// });
// var then = moment().hour(time);

// var future = moment().isBefore(then);
// var past = moment().isAfter(then);
// var present = moment().isSame(then);

// if (future === true) {
//     $()
// }

