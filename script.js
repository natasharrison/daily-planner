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

// click to save to localStorage so entered text remains when page is refreshed
$('#saveBtn').click(function(){
    // get nearby values
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // save in localStorage
    localStorage.setItem(time, value);
}
);

// Time Comparison Function 
// var auditTask = 
var future = moment().isBefore(currentHour);
var past = moment().isAfter(currentHour);
var present = moment().isSame(currentHour);

// if (future === true) {
//     $()
// }


