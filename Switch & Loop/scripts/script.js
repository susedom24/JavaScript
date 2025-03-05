window.onload = function() {
    getHolidays();
};

function getHolidays(){
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let monthHoliday = document.getElementById("holiday");

    for (let i = 0; i < month.length; i++) {
        let holidays = "";
        switch (month[i]){
            case "January":
                holidays = "New Years Day, Martin Luther King Jr. Day";
                break;
            case "February":
                holidays = "Washington's Birthday, Valentine's Day";
                break;
            case "March":
                holidays = "Mardi Gras, St. Patrick's Day";
                break;
            case "April":
                holidays = "Easter, Earth Day";
                break;
            case "May":
                holidays = "Memorial Day, Mother's Day";
                break;
            case "June":
                holidays = "Father's Day, Alzheimer's & Brain Awareness Month";
                break;
            case "July":
                holidays = "Independence Day, National Horseradish Month"
                break;
            case "August":
                holidays = "Purple Heart Day, International Cat Day";
                break;
            case "September":
                holidays = "Labor Day, National Teddy Bear Day";
                break;
            case "October":
                holidays = "Halloween, Columbus Day";
                break;
            case "November":
                holidays = "Thanksgiving, Veterans Day";
                break;
            case "December":
                holidays = "Christmas, Hanukkah";
                break;
        }
        monthHoliday.innerHTML += `<p>${month[i]}: ${holidays}</p></br>`;
    }
}