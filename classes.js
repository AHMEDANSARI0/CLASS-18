"use strict";
// class User {
//     email: string;
//     name: string;
//     isMarried: boolean;
//     constructor(name1: string, email1: string, isMarried1: boolean) {
//         this.name = name1;
//         this.email = email1;
//         this.isMarried = isMarried1;
//     }
// }
// let user1 = new User("faizan", "faizan@gmail.com", false);
// let user2 = new User("fahim", "fahim@gmail.com", true);
// let user3 = new User("faizan", "faizan@gmail.com", true);
// console.log(user1);
// console.log(user2);
// console.log(user3);
class Animal {
    constructor(animalName, animalAge) {
        this.name = animalName;
        this.age = animalAge;
    }
    makeSound() {
        console.log(`${this.name} makes sound`);
    }
    getDetails() {
        console.log(`animal details: name = ${this.name}, age: ${this.age}`);
    }
}
// inheritance
class Dog extends Animal {
    constructor(name1, age, dogBreed) {
        super(name1, age);
        this.breed = dogBreed;
    }
}
let dog = new Dog("pluto", 5, "germanshephred");
dog.makeSound();
dog.getDetails();
