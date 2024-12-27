class Voiture {
    constructor(marque, modele, annee, couleur) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    afficheDetails() {
        console.log(this.marque)
        console.log(this.modele)
        console.log(this.annee)
        console.log(this.couleur)
        return Voiture
    }
}
const voiture = new Voiture("Toyota", "Yaris", "2002", "Rouge")
voiture.afficheDetails();