// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

})
// Creating event listener 
// right here we're making a reference to every button that belongs to the .saveBtn class
// we're listening for a click and will run this function after
$(".saveBtn").on("click", function () {
  // here we're logging the value of the button's sibling that belongs to the class .description
  console.log($(this).siblings(".description").val());
  // here we're grabbing the id of the button's parent
  let id = $(this).parent().attr("id");
  // this is the console log but we're storing it as the variable "value"
  let value = $(this).siblings(".description").val();
  localStorage.setItem(id, value);
  $(".notifications").addClass("displayBlock");
  setTimeout(() => {
    $(".removeClass").removeClass("displayBlock");
  }, 1000);
});





//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

//
// adding the time to the app 
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  console.log(rightNow)
  $("#currentDay").text(rightNow);
}

displayTime()
