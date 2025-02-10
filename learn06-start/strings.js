function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Stephanie Usedom";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";
    document.getElementById("length").innerHTML = myString.length;

    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let myString2 = "\"\'Tis some visitor,\" I muttered, \"tapping at my chamber door, \\ Only this, and nothing more.\""
    document.getElementById("escape").innerHTML = myString2;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    var name = "Stephanie Lyn Usedom";
    
    let part1 = name.slice(0,9);
    document.getElementById("first").innerHTML = part1;

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let part2 = name.slice(10,13);
    document.getElementById("middle").innerHTML = part2;

    // Use the JavaScript subst Method to display your last name to the last paragraph
    let part3 = name.slice(14);
    document.getElementById("last").innerHTML = part3;

    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph
    let major = "I'm majoring in Physical Therapy at McHenry County College"
    let newMajor = major.replace("Physical Therapy", "Software Development")
    document.getElementById("major").innerHTML = newMajor;

    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let myText1 = myText.toUpperCase();
    document.getElementById("upper").innerHTML = myText1;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trimText1 = trimText.trim();
    document.getElementById("trim").innerHTML = trimText1;

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph
    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let newMonths = months.indexOf("May");
    document.getElementById("index").innerHTML = newMonths;

    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    var first = "Stephanie";
    var last = "Usedom";


    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    let greet = `Hi, my name is ${first} ${last}.`
    document.getElementById("greeting").innerHTML = greet;
}