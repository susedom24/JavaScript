// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";


// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHTML = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    var dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2 = "Rogue";
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition; 
    let subtraction = 32 - 10
    document.getElementById("subtraction").innerHTML = "32 - 10 = " + subtraction;
    let multiplication = 10 * 32
    document.getElementById("multiplication").innerHTML = "10 * 32 = " + multiplication;
    let exponent = 10 ** 2
    document.getElementById("exponent").innerHTML = "10 ** 2 = " + exponent;
    let division = 10 / 2
    document.getElementById("division").innerHTML = "10 / 2 = " + division;
    let modulus = 12 % 5
    document.getElementById("modulus").innerHTML = "12 % 5 = " + modulus;
    let x = 10;
        x++;
    let z = x
    document.getElementById("increment").innerHTML = "Start = 10 Increment = " + z;
    let a = 10;
        a--;
    let b = a
    document.getElementById("decrement").innerHTML = "Start = 10 Decrement = " + b;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10;
    document.getElementById("equals").innerHTML = "x = 10 " + "x = " + x;
    x += 10;
    document.getElementById("plus-equals").innerHTML = "x += 10 " + "x = " + x;
    x -= 10; 
    document.getElementById("minus-equals").innerHTML = "x -= 10 " + "x = " + x;
    x *= 10;
    document.getElementById("times-equals").innerHTML = "x *= 10 " + "x = " + x;
    x /= 10;
    document.getElementById("divide-equals").innerHTML = "x /= 10 " + "x = " + x;
    x %= 10;
    document.getElementById("modulus-equals").innerHTML = "x %= 10 " + "x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const bugs = ["butterfly", " spider", " ladybug"];
    document.getElementById("array").innerHTML = bugs;
    const person = {firstName:"Elliot ", lastName:"Stabler"};
    document.getElementById("object").innerHTML = person.firstName + person.lastName;
}
