function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = Math.round(3.14);
    document.getElementById("ceil").innerHTML = Math.ceil(867.5309);
    document.getElementById("floor").innerHTML = Math.floor(867.5309);
    document.getElementById("trunc").innerHTML = Math.trunc(3.14);
    document.getElementById("sign").innerHTML = Math.sign(-23);
    document.getElementById("pow").innerHTML = Math.pow(4, 2);
    document.getElementById("min").innerHTML = Math.min(23, 17, 45, 11, 135);
    document.getElementById("random").innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.floor(Math.random()* 101);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let x = 2;
    document.getElementById("comparisons").innerHTML = "x == 2: " + (x == 2) + " vs. " + 'x === "2":' + (x === "2");

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}