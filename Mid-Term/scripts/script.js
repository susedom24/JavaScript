function addYarn(event){
    event.preventDefault();
    const yarnForm = document.getElementById("yarn-form");
    const yarnList = document.getElementById("yarn-list");

    const yarnName = document.getElementById("yarn-name").value;
    const yarnBrand = document.getElementById("yarn-brand").value;
    const yarnWeight = document.getElementById("yarn-weight").value;
    const yarnColor = document.getElementById("yarn-color").value;
    const yarnQuantity = document.getElementById("yarn-quantity").value;

    const card = document.createElement("div");
    
}