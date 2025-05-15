//json//

const yarns = [
    {
        name: "Spincycle Yarns Dream State",
        color: "Melancholia",
        weight: "Fingering",
        yardage: "200yards"
    },
        {
        name: "Hedgehog Fibers Merino DK",
        color: "Foam",
        weight: "DK",
        yardage: "220yards"
    },
        {
        name: "Fyberspates Cumulus",
        color: "Plum",
        weight: "Lace",
        yardage: "164yards"
    },
        {
        name: "Farmer's Daughter Craggy Tweed",
        color: "Buffalo Gal",
        weight: "DK",
        yardage: "231yards"
    },
        {
        name: "Malabrigo Rios",
        color: "Cereza",
        weight: "Worsted",
        yardage: "210yards"
    }
]

const list = document.getElementById("yarn-container");
yarns.forEach(yarn => {
    const card = document.createElement("div");
    card.className = "yarn-card";
    card.innerHTML = `
        <h2>${yarn.name}</h2>
        <p>${yarn.color}</p>
        <p>${yarn.weight}</p>
        <p>${yarn.yardage}</p>
        `;
    list.appendChild(card);
    
});

//jquery//

$(document).ready(function() {
    $("#slide-in").click(function(){
        $(".animation").animate({
            left: "42%"
        }, 1000);
    })
});

$(document).ready(function(){
  $("#load").click(function(){
    $("#ajax").load("ajax.txt");
  });
});