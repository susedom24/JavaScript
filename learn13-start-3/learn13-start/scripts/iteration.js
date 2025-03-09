/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const list = ["The Road by Cormac McCarthy", "Red Dragon by Thomas Harris", "Shutter Island by Dennis Lehane", "The Fireman by Joe Hill", "The Shining by Stephen King" ];

let books = "";
for (const x of list) {
    books += x + "</br>";
}
document.getElementById("list").innerHTML = books;

/*
JS Sets
https://www.w3schools.com/js/js_sets.asp
Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)
*/
const songs = new Set(["Brain Damage by Pink Floyd", "Layla by Derek & the Dominos", "Black Dog by Led Zepplin", "Refugee by Tom Petty & the Heartbreakers", "American Pie by Don McLean"])
let songList = "";
for (const x of songs) {
    songList += x + "</br>";
}
document.getElementById("set1").innerHTML = songList;

// add two more songs to the set then display in the set2 paragraph
songs.add("Heart of Gold by Neil Young")
songs.add("Golden Years by David Bowie")

let songList2 = "";
for (const x of songs){
    songList2 += x + "</br>";
}
document.getElementById("set2").innerHTML = songList2;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const nameList = new Map([
    ["Jane Doe", "jdoe@genericemail.com"],
    ["John Doe", "doejohn@genericemail.com"],
    ["Alex Thompson", "athompson@example.com"],
    ["Stephanie Usedom", "skroske@student.mchenry.edu"],
    ["Tedd Prater", "tprater@mchenry.edu"],
])
let emails = "";
nameList.forEach (function(value, key) {
      emails += key + ' = ' + value + "<br>"
})
document.getElementById("map1").innerHTML = emails;
// add two new names and emails and display in map2 use the forEach() method
nameList.set("Cyndi White", "cwhite@example.com")
nameList.set("Jan Cichy", "jcichy@example.com");

let emails1 = "";
nameList.forEach (function(value, key) {
      emails1 += key + ' = ' + value + "<br>"
})
document.getElementById("map2").innerHTML = emails1;
// get and display the email of one person, display in map3