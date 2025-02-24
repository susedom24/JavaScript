/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
let currentDate = new Date();
document.getElementById("basic").innerHTML = currentDate;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
let today = new Date("2025-02-24T11:56:00");
document.getElementById("today").innerHTML = today;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
let birth = new Date("May 13, 1989 07:39:00");
document.getElementById("birthday").innerHTML = birth;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
let isoString = currentDate.toISOString();
document.getElementById("iso").innerHTML = isoString;


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const a = new Date("2/24/2025");
const b = new Date("2020");
const c = new Date("2017-08");
document.getElementById("date1").innerHTML = a;
document.getElementById("date2").innerHTML = b;
document.getElementById("date3").innerHTML = c;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const d = new Date("2015-11-13");
d.getFullYear();
const e = new Date("2017-08-02");
e.getMonth();
const f = new Date("1958-06-03");
f.getDate();
const g = new Date("2023-03-06");
g.getHours();
document.getElementById("get1").innerHTML = d.getFullYear();
document.getElementById("get2").innerHTML = e.getMonth() + 1;
document.getElementById("get3").innerHTML = f.getDate();
document.getElementById("get4").innerHTML = g.getHours();

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const h = new Date("2025-05-13");
h.setFullYear("1989");
const j = new Date("2015-06-13");
j.setMonth(11);
const k = new Date("2017-08-02");
k.setHours(12, 1);
const l = new Date("1958-06-12");
l.setDate(3);
document.getElementById("set1").innerHTML = h;
document.getElementById("set2").innerHTML = j;
document.getElementById("set3").innerHTML = k;
document.getElementById("set4").innerHTML = l;