class Voiture {
    constructor(marque, modele, annee,) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;

    }

    afficheDetails() {
        console.log(this.marque)
        console.log(this.modele)
        console.log(this.annee)
    }


}


class Véhicule extends Voiture {
    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee)
        this.couleur = couleur
    }

    afficheDetails() {
        console.log(this.couleur)
    }
}

const voiture = new Véhicule("Toyota", "Yaris", 2002, "Rouge")


voiture.afficheDetails();


