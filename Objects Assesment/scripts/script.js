const cat1 = {
    name: "Frog",
    color: "Black",
    breed: "American Shorthair",
    age: "2 years",
    image: "images/frog.jpg",
    bio: "Frog enjoys playing with ping pong balls and making biscuits.",
 }
 
 const cat2 = {
    name: "Twilight",
    color: "Black & White",
    breed: "American Shorthair",
    age: "2 years",
    image: "images/twilight.jpg",
    bio: "Twilight enjoys playing with springs and lots of cuddles."
 }
 
 const cat3 = {
    name: "Herbie",
    color: "Grey & Cream",
    breed: "Siamese",
    age: "24",
    image: "images/herbie.jpg",
    bio: "This old guy enjoys naps and treats"
 }
 
 const cat4 = {
    name: "Yardstick",
    color: "Orange",
    breed: "Tabby",
    age: "5 months",
    image: "images/yardstick.jpg",
    bio: "3 feet, but a full heart."
 }
 
 const cat5 = {
    name: "Mr. Bigglesworth",
    color: "White",
    breed: "Maine Coon",
    age: "6 years",
    image: "images/mr-bigglesworth.jpg",
    bio: "Mr. Bigglesworth enjoys lap-sitting and pets."
 };
 function display() {
    let html1 = `<h2>${cat1.name}</h2>` + `<p>${cat1.age}</p>` + 
       `<img src = ${cat1.image}>` +
        `<h3>More about Frog:</h3>` +
        `<p>Color: ${cat1.color}</p>` + 
        `<p>Breed: ${cat1.breed}</p>` + 
        `<p>${cat1.bio}</p>`;
    document.getElementById('ob1').innerHTML = html1;

    let html2 = `<h2>${cat2.name}</h2>` + `<p>${cat2.age}</p>` + 
       `<img src = ${cat2.image}>` +
        `<h3>More about Twilight:</h3>` +
        `<p>Color: ${cat2.color}</p>` + 
        `<p>Breed: ${cat2.breed}</p>` + 
        `<p>${cat2.bio}</p>`;
    document.getElementById('ob2').innerHTML = html2;
    
    let html3 = `<h2>${cat3.name}</h2>` + `<p>${cat3.age}</p>` + 
    `<img src = ${cat3.image}>` +
     `<h3>More about Herbie:</h3>` +
     `<p>Color: ${cat3.color}</p>` + 
     `<p>Breed: ${cat3.breed}</p>` + 
     `<p>${cat3.bio}</p>`;
    document.getElementById('ob3').innerHTML = html3; 

    let html4 = `<h2>${cat4.name}</h2>` + `<p>${cat4.age}</p>` + 
    `<img src = ${cat4.image}>` +
     `<h3>More about Yardstick:</h3>` +
     `<p>Color: ${cat4.color}</p>` + 
     `<p>Breed: ${cat4.breed}</p>` + 
     `<p>${cat4.bio}</p>`;
    document.getElementById('ob4').innerHTML = html4; 

    let html5 = `<h2>${cat5.name}</h2>` + `<p>${cat5.age}</p>` + 
    `<img src = ${cat5.image}>` +
     `<h3>More about Mr. Bigglesworth:</h3>` +
     `<p>Color: ${cat5.color}</p>` + 
     `<p>Breed: ${cat5.breed}</p>` + 
     `<p>${cat5.bio}</p>`;
 document.getElementById('ob5').innerHTML = html5; 
 }