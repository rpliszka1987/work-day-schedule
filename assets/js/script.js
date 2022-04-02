// Use different color to show when the task is do or past due.

// Variables declaration
// Secelcts HTML ID currentDay
var currentDateEl = $("#currentDay");
// Gets current date
var dateNow = moment().format("dddd, MMMM Do YYYY");
// Get div container from page
var containerEl = $(".container");

// Adds date to page
currentDateEl.text(dateNow);

// Save tasks to local storage when clicked on save
$(".saveBtn").on("click", function () {
    // Gets value of text area
    var value = $(this).siblings(".description").val().trim();
    // Get div id
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});