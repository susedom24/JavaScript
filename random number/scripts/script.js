let ranNum; 

function game() {
    ranNum = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("start").innerText = "Please guess a number between 1 and 1000.";
    document.getElementById("answer").innerText = "";
    document.getElementById("color").style.backgroundColor = "";
    difference = null;
}

function check() {
    let guess = parseInt(document.getElementById("guess").value);
    let difference = Math.abs(ranNum - guess);
    let answerColor = document.getElementById("color");
    let response = "";
    let color = "";

    if (guess === ranNum) {
        response = "That's correct!";
        color = "rgb(91, 255, 26)";
    } else {
        if (difference <= 25) {
            response = "On Fire!";
            color = "rgb(252, 41, 41)";
        } else if (difference <= 50) {
            response = "Hot!";
            color = "rgb(252, 146, 41)";
        } else if (difference <= 100) {
            response = "Warm!";
            color = "rgb(252, 245, 41)";
        } else if (difference <= 150) {
            response = "Cold!";
            color = "rgb(26, 84, 255)";
        } else if (difference <= 200) {
            response = "Very Cold!"
            color = "rgb(58, 153, 255)";
        } else {
            response = "Freezing!"
            color = "rgb(167, 210, 255)";
        }
    }
    document.getElementById("answer").innerText = response;
    answerColor.style.backgroundColor = color;
}