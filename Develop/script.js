var currentDay = moment().format('MMMM Do YYYY');
// var enterTextEl = document.querySelector("#enter-task");
//     console.log(timeBlockTask);
// var saveButtonEl = document.querySelector("#saveBtn");

// display current date 
window.onload = function (){
    document.getElementById('currentDay').innerHTML = currentDay;
};

// // plan a task 
// var planTask = function(event) {
//     // prevent page from refreshing 
//     event.preventDefault();

//     // get value from input element 
//     var task = enterTaskEl.value;
// };

// // save to local storage when button is clicked 
// var buttonClickHandler = function(event){
// // save to local storage
// };

// // add event listener to buttons
// saveButtonEl.addEventListener("click", buttonClickHandler);