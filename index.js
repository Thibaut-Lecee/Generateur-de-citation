
 // une variable pour récuperer depuis mon fichier html, le composant qui porte l'id 'nom'

let btn = document.getElementById('btn');
let avatar = document.getElementById('avatar');
let citation = document.getElementById('citation');
let text = document.getElementById('nom');
let citations = [
    {

        "nom": "Bill gates",

        "citation": "Le logiciel est une excellente combinaison entre l'art et l'ingénierie.",

    	"image": "http://graven.yt/avatar/billgates.jpg"

        
    },
    {

        "nom": "Bjarne Stroustrup",

        "citation": "Il n'y a que deux sortes de langages de programmation: ceux dont les gens disent toujours du mal et ceux que personne n'utilise.",

    	"image": "http://graven.yt/avatar/bjarne.jpg"

    },
    {

    	"nom": "Edsger Dijkstra",

    	"citation": "Si debugger, c’est supprimer des bugs, alors programmer ne peut être que les ajouter",

    	"image": "http://graven.yt/avatar/edsger.jpg"

    },

    {

        "nom": "Mark Zuckerberg",

        "citation": "Une règle simple pour vraiment changer les choses, c’est de commencer toujours par le plus simple, et non par le plus difficile. Parce que c’est la meilleure manière de progresser rapidement.",

    	"image": "http://graven.yt/avatar/zuckerberg.jpg"

    },

    {

    	"nom": "Toby Parkins",

    	"citation": "La refactorisation c’est comme faire la vaisselle après la cuisine.",

    	"image": "http://graven.yt/avatar/toby.jpg"

    },

    {

        "nom": "Auteur inconnu",

        "citation": "Le fossé séparant théorie et pratique est moins large en théorie qu’il ne l’est en pratique",

    	"image": "http://graven.yt/avatar/inconnu.jpg"

    },

    {

        "nom": "Alain Turing",

        "citation": "Les tentatives de création de machines pensantes nous seront d'une grande aide pour découvrir comment nous pensons nous-mêmes.",

    	"image": "http://graven.yt/avatar/turing.jpg"

    }



];

// faire l'evenement lors d'un click bouton
btn.addEventListener('click', updatePage);

// recuperer toutes les citations depuis le lien graven.yt/citations.json
//fetch(url).then((data) => {
  //  data.json().then((data) => {
    //    citations = data;

        // affichage de citations
      //  console.log(citations);
    //});
//});

function updatePage() {
 
    // choix au hasard d'une citation parmis la liste
    let random = Math.floor(Math.random() * (citations.length - 0));
    let randomCitation = citations[random];
console.log(randomCitation);
    // modification
    text.innerText = randomCitation['nom'];
    citation.innerText = randomCitation['citation'];
    avatar.setAttribute('src', randomCitation['image']);
}
