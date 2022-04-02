//  Show work schedule from 9 AM - 5 PM 

// Create row wirth time / textarea / save button

// Save items to local storage

// Use different color to show when the task is do or past due.

// Variables declaration
// Secelcts HTML ID currentDay
var currentDateEl = $("#currentDay");
// Gets current date
var dateNow = moment().format("dddd, MMMM Do YYYY");

// Adds date to page
currentDateEl.text(dateNow);