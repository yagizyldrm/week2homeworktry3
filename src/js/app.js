
//Importing the CSS files.
import "../../.dist/css/style.css";
import "../../src/scss/style.scss";
class Animal {
    constructor(name, image, numberOfLegs) {
        this.name = name;
        this.image = image;
        this.numberOfLegs = numberOfLegs;
    }
}
class Dog extends Animal {
    constructor(name, image, age, numberOfLegs) {
        super(name, image, numberOfLegs);
        this.age = age;
    }
    create() {
        //Creating Elements
        const name = document.createElement("p");
        const age = document.createElement("p");
        const image = document.createElement("div");
        const img = document.createElement("img");
        const animalCard = document.createElement("div");
        const cardInfo = document.createElement("div");
        //Adding ClassName and Paramaters
        name.innerHTML = "Name: " + this.name;
        name.className = "animalName";
        age.innerHTML = "Age: " + this.age;
        age.className = "animalAge";
        img.src = this.image;
        image.className = "animalImage";
        cardInfo.className = "cardInfo";
        animalCard.className = "animalCard";
        //Appending Child
        image.appendChild(img);
        cardInfo.appendChild(name);
        cardInfo.appendChild(age);
        animalCard.appendChild(cardInfo);
        animalCard.appendChild(image);
        return animalCard;
    }
}
class Duck extends Animal {
    constructor(name, image, age, numberOfLegs) {
        super(name, image, numberOfLegs);
        this.age = age;
    }
    create() {
        //Creating Elements
        const name = document.createElement("p");
        const age = document.createElement("p");
        const image = document.createElement("div");
        const imageSource = document.createElement("img");
        const animalCard = document.createElement("div");
        const cardInfo = document.createElement("div");
        //Adding ClassName and Paramaters
        name.innerHTML = "Name: " + this.name;
        name.className = "animalName";
        age.innerHTML = "Age: " + this.age;
        age.className = "animalAge";
        imageSource.src = this.image;
        image.className = "animalImage";
        cardInfo.className = "cardInfo";
        animalCard.className = "animalCard";
        //Appending Child
        image.appendChild(imageSource);
        cardInfo.appendChild(name);
        cardInfo.appendChild(age);
        animalCard.appendChild(cardInfo);
        animalCard.appendChild(image);
        return animalCard;
    }
}
const animalCardsContainer = document.querySelector(".animalCard-container");
//Creating new instances
const Dog1 = new Dog("Karabas", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 3, 4);
const Dog2 = new Dog("Comar", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 4, 4);
const Dog3 = new Dog("Arya", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 1, 4);
//Adding new instances to Constructor by child appending
animalCardsContainer.appendChild(Dog1.create());
animalCardsContainer.appendChild(Dog2.create());
animalCardsContainer.appendChild(Dog3.create());
//Creating new instances
const Duck1 = new Duck("Duffy", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 1, 2);
const Duck2 = new Duck("Donald", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 2, 2);
const Duck3 = new Duck("Trump", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 4, 2);
//Adding new instances to Constructor by child appending
animalCardsContainer.appendChild(Duck1.create());
animalCardsContainer.appendChild(Duck2.create());
animalCardsContainer.appendChild(Duck3.create());
