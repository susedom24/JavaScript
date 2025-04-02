//Stash array to hold entries
let yarnStash = []

//Function to add objects the user inputs to array, then clear the form for another entry
function addYarn() {

    let yarnName = document.getElementById("yarn-name").value;
    let yarnBrand = document.getElementById("yarn-brand").value;
    let yarnWeight = document.getElementById("yarn-weight").value;
    let yarnColor = document.getElementById("yarn-color").value;
    let yarnQuantity = document.getElementById("yarn-quantity").value;
    let yarnYards = document.getElementById("yarn-yards").value;

    if (!yarnName || !yarnBrand || !yarnWeight || !yarnColor || yarnQuantity <= 0) {
        alert("Please check yarn details and re-submit the form.");
        return;
    }

    let yarn = {
        name: yarnName,
        brand: yarnBrand,
        weight: yarnWeight,
        color: yarnColor,
        quantity: yarnQuantity,
        yards: yarnYards,
    };

    yarnStash.push(yarn);

    displayStash();
    totalStats();

    document.getElementById("yarn-form").reset();
}

//Function to use the array and create an HTML card element for each one and a button to delete the entry
function displayStash() {
    let yarnList = document.getElementById("yarn-list");
    yarnList.innerHTML = "";

    yarnStash.forEach((yarn, index) => {
        let entryTotal = yarn.quantity * yarn.yards;

        let card = document.createElement("div");
        card.classList.add("yarn-card");

        card.innerHTML = `
            <h2>${yarn.name}</h2>
            <p>Brand: ${yarn.brand}</p>
            <p>Weight: ${yarn.weight}</p>
            <p>Color: ${yarn.color}</p>
            <p>Skeins: ${yarn.quantity}</p>
            <p>Yards Per: ${yarn.yards}</p>
            <p>Total Yards: ${entryTotal}</p>
        `;

        let deleteYarn = document.createElement("button");
        deleteYarn.textContent = "Delete";
        deleteYarn.classList.add("delete-yarn");
        deleteYarn.addEventListener("click", function () {
            removeYarn(index);
        })

        card.appendChild(deleteYarn);
        yarnList.appendChild(card);
    })
}

//Function to remove the yarn from the array and refresh the list
function removeYarn(index) {
    yarnStash.splice(index, 1);
    displayStash();
    totalStats();
}

//Function for total yardage & total skeins for all entries
function totalStats() {
    let totalYards = 0;
    let totalSkeins = 0;

    yarnStash.forEach((yarn, index) => {
        totalSkeins += Number(yarn.quantity);
        totalYards += yarn.quantity * yarn.yards;
    })

    document.getElementById("total-yardage").innerHTML = `Total Yards: ${totalYards} yards`;
    document.getElementById("total-skeins").innerHTML = `Total Skeins: ${totalSkeins} skeins`;
}

//Event listener for form submission & keeps the stash active unless page is manually refreshed
document.getElementById("yarn-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addYarn();
});
