function calculateTotal() {
    let name = document.getElementById("name").value;
    
    let drpepper = parseFloat(document.getElementById("drpepper").value) || 0;
    let coke = parseFloat(document.getElementById("coke").value) || 0;
    let water = parseFloat(document.getElementById("water").value) || 0;
    let gatorade = parseFloat(document.getElementById("gatorade").value) || 0;
    let rootBeer = parseFloat(document.getElementById("root_beer").value) || 0;

    let hotdog = parseFloat(document.getElementById("hotdog").value) || 0;
    let hamburger = parseFloat(document.getElementById("hamburger").value) || 0;
    let cheeseburger = parseFloat(document.getElementById("cheeseburger").value) || 0;
    let roastBeef = parseFloat(document.getElementById("roast_beef").value) || 0;
    let hamCheese = parseFloat(document.getElementById("ham_cheese").value) || 0;

    let vanillaIce = parseFloat(document.getElementById("vanilla_ice").value) || 0;
    let chocolateIce = parseFloat(document.getElementById("chocolate_ice").value) || 0;
    let tiramisu = parseFloat(document.getElementById("tiramisu").value) || 0;
    let cheesecake = parseFloat(document.getElementById("cheesecake").value) || 0;
    let cookie = parseFloat(document.getElementById("cookie").value) || 0;

    const drinkPrice = 2;
    const sandwichPrice = 4;
    const dessertPrice = 3;

    let drinkTotal = (drpepper + coke + water + gatorade + rootBeer) * drinkPrice;
    let sandwichTotal = (hotdog + hamburger + cheeseburger + roastBeef + hamCheese) * sandwichPrice;
    let dessertTotal = (vanillaIce + chocolateIce + tiramisu + cheesecake + cookie) * dessertPrice;

    let grandTotal = drinkTotal + sandwichTotal + dessertTotal;

    document.getElementById("drinkTotal").innerText = drinkTotal;
    document.getElementById("sandwichTotal").innerText = sandwichTotal;
    document.getElementById("dessertTotal").innerText = dessertTotal;
    document.getElementById("grandTotal").innerHTML = (name + ", your total is: $") + grandTotal;
}