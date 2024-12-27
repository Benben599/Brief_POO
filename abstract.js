class Animal {

    faireDuBruit() {
throw new Error ("")
    }
}

class Chien extends Animal {
faireDuBruit() {
    return "le chien aboie";
}
}

class Chat extends Animal {
    faireDuBruit() {
       return "le chat miaule";
    }
}

const animaux = [new Chien(), new Chat()];

animaux.forEach(animal => console.log(animal.faireDuBruit()));
