function addme() {
    const contact = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        eMail: document.getElementById("email").value,
        phoneNum: document.getElementById("phone").value,
    };

    const jsonValue = JSON.stringify(contact);
    document.getElementById("json-value").textContent = jsonValue;

}