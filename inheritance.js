class Voiture {
    constructor(marque, modele, annee,) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
}

class Véhicule extends Voiture {
    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee)
        this.couleur = couleur
    }

}

const voiture = new Véhicule("Toyota", "Yaris", 2002, "Rouge")

console.log(voiture.couleurs); 
