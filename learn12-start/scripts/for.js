// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html.

function bottles(){
    let song = "";
    let lyrics = "";

    for (let i = 99; i >= 1; i -- ){
        if (i > 1){
        lyrics += i + " bottles of beer on the wall," + "</br>" + i + " bottles of beer," + "</br>";
        lyrics += "Take one down, pass it around," + "</br>" + (i - 1) + " bottles of beer on the wall." + "</br></br>";
        } else {
            lyrics += i + " bottle of beer on the wall," + "</br>" + i + " bottle of beer," + "</br>";
            lyrics += "Take one down, pass it around," + "</br>" + "No more bottles of beer on the wall." + "</br></br>";
        }
    }
    document.getElementById("beer").innerHTML = lyrics;
}

//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let para = "";
for (let x in months){
    para += months[x] + "</br>";
}
document.getElementById("for-in").innerHTML = para;

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let string = "Arachibutyrophobia";
let msg = "";
for (let x of string){
    msg += x + "</br>";
}
document.getElementById("for-of").innerHTML = msg;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let b = 1
let loop = "";
while (b < 51){
    loop += "Add one: " + b + "</br>";
    b++;
}
document.getElementById("while").innerHTML = loop;