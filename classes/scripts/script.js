class Cat {
    constructor(name, breed, age, color) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
    }
    catStats() {
        return `${this.name} cat is a ${this.breed} cat, is ${this.age} years old and their coat is ${this.color} colored!`;
    }

    static totalCatYears(cat1, cat2, cat3, cat4) {
        const age1 = cat1.age;
        const age2 = cat2.age;
        const age3 = cat3.age;
        const age4 = cat4.age;

        return age1 + age2 + age3 + age4;
    }
}

const cat1 = new Cat("Harry", "Maine Coon", 14, "black");
const cat2 = new Cat("Frog", "American Shorthair", 2, "black");
const cat3 = new Cat("Twilight", "American Shorthair", 2, "tuxedo");
const cat4 = new Cat("Mr. Bigglesworth", "Sphynx", 10, "peach");

console.log(cat1);
console.log(cat2);
console.log(cat3);
console.log(cat4);
console.log(cat1.catStats());
console.log(cat2.catStats());
console.log(cat3.catStats());
console.log(cat4.catStats());
console.log(Cat.totalCatYears(cat1, cat2, cat3, cat4));

function displayStats(){
    document.getElementById("cat1").innerHTML = cat1.catStats();
    document.getElementById("cat2").innerHTML = cat2.catStats();
    document.getElementById("cat3").innerHTML = cat3.catStats();
    document.getElementById("cat4").innerHTML = cat4.catStats();
}

document.addEventListener("DOMContentLoaded", displayStats);