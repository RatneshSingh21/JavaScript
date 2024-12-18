//Design a JavaScript program to display the current day and time in the 
// following format. 
// Today is : Monday. 
// Current time is : 11 AM : 50 : 58

var Todayday = new Date();
var day = Todayday.getDay();

var week = ["sunday", "monday", "tueaday", "thursday", "friday", "saturday"];

console.log("today is : " + week[day]);

var hour = Todayday.getHours();
var min = Todayday.getMinutes();
var second = Todayday.getSeconds();

var tan = (hour >= 12) ? "PM" : "AM";

if (tan === "PM" && hour === 0) {
    if (min === 0 && second === 0) {
        hour = 12;
        tan = "Noon";
    }
    else {
        hour = 12;
        tan = "PM";
    }
}

if (tan === "AM" && hour === 0) {
    if (min === 0 && second === 0) {
        hour = 12;
        tan = "midnight";
    }
    else {
        hour = 12;
        tan = "AM";
    }
}

console.log("Current time is :"+ hour + tan + ":" + min + ":" + second );

