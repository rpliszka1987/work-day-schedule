// Variables declaration
// Secelcts HTML ID currentDay
var currentDateEl = $("#currentDay");
// Gets current date
var dateNow = moment().format("dddd, MMMM Do YYYY");
// Current hour
var currentHour = moment().hour();
// Get div container from page
var containerEl = $(".container");

// Adds date to page
currentDateEl.text(dateNow);

// Save tasks to local storage when clicked on save
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // Gets value of text area
        var value = $(this).siblings(".description").val().trim();
        // Get div id
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    function hourlyRefresh() {
        $(".time-slot").each(function () {
            var hour = parseInt($(this).attr("id"));

            if (hour < currentHour) {
                $(this).addClass("past");
            } else if (hour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    };
    hourlyRefresh();


    var interval = setInterval(hourlyRefresh, 1000);
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    $("#currentDay").text(moment().format("dddd. MMMM Do YYYY"));

    $("#clear-schedule").on("click", function () {
        localStorage.clear();
        location.reload();
    });

});