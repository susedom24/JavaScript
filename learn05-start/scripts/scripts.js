const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water.",
    altTag: "Black dog in bucket."
}

const dog2 = {
    heading: "Golden Puppy",
    image: "images/gold-dog.jpg",
    caption: "Enojying the dog days of summer.",
    altTag: "Retriever puppy in grass."
}

const dog3 = {
    heading: "Lend Me a Hand",
    image: "images/snow-dog.jpg",
    caption: "I think you took my stick.",
    altTag: "Puppy with snowman."
}

const dog4 = {
    heading: "Sweet Hearts",
    image: "images/white-dogs.jpg",
    caption: "Summer lovin'...having a blast!",
    altTag: "Mom and puppy kisses."
};


function chooseDog(dog, button) {
    if (dog == 1) {
        loadMe(dog1, 1);
    } else if (dog == 2) {
        loadMe(dog2, 2);
    } else if (dog == 3) {
        loadMe(dog3, 3);
    } else
        loadMe(dog4, 4);

    button.style.display = "none";
}


function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;

}

