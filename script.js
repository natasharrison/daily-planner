var currentDay = moment().format('MMMM Do YYYY');

// current hour in military time
var currentHour = moment().format('H');

var textarea = document.querySelector("#description").value;

var saveButtonEl = document.querySelector("#saveBtn");

// Hour variables 
var nineEl = document.querySelector("#hour-nine").innerText;
var tenEl = document.querySelector("#hour-ten").innerText;
var elevenEl = document.querySelector("#hour-eleven").innerText;
var twelveEl = document.querySelector("#hour-twelve").innerText;
var oneEl = document.querySelector("#hour-one").innerText;
var twoEl = document.querySelector("#hour-two").innerText;
var threeEl = document.querySelector("#hour-three").innerText;
var fourEl = document.querySelector("#hour-four").innerText;
var fiveEl = document.querySelector("#hour-five").innerText;

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
var future = moment().isBefore();
var past = moment().isAfter();
var present = moment().isSame();

// if (future === true) {
//     $()
// }


