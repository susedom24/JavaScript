function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Stephanie Usedom"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let a = 5;
    let b = "2";
    let c = "a + b";
    let d = a + b;
    document.getElementById("add").innerHTML = c + " = " + d;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let e = 8675309;
    document.getElementById("to-string").innerHTML = e.toString();
        
    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let f = 8.675309;
    document.getElementById("exponent").innerHTML = f.toExponential(2);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    document.getElementById("fixed").innerHTML = f.toFixed(3);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    document.getElementById("precision").innerHTML = f.toPrecision(5);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML = parseFloat("867 5309");

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = parseInt("5309.867")

    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML = "The (===) operator is strict and will compare value and type for equality. Comparing a number to a string, even if it's the number 5 vs. the word five, will return false. The (==) operator can try to convert values to the same type before trying to compare them. The strict operator is the better choice where accuracy is a factor."
    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "The booleans '&&' and '||' are used for comparisons. The '&&' operator always takes precedence and so this should be taken into account, but the order of precedence can be manipulated using parentheses to force the '||' operator to be determined first."
    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    let age = 16
    let canDrive = (age >= 16) ? "You can get a driver's license" : "You are not old enough to get a driver's license"
    document.getElementById("ternary").innerHTML = canDrive;
}    
// Write code to demonstrate the use of the switch statement and display results to switch paragrah

function buttons(newOutput) {
    const output = document.getElementById("switch");
    switch (newOutput) {
        case 1:
            output.textContent = "Number 1";
            break;
        case 2:
            output.textContent = "Number 2";
            break;
        case 3:
            output.textContent = "Number 3";
            break;
    }
}