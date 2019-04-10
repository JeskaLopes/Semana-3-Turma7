var elogios = [
    "Diva sem defeitos",
    "Não é github, mas é gatinho",
    "Universal", 
    "Icone Incompreendido",
    "Responsivo #SQN",
    "Maravilhindo",
    "Fada Sensata",
    "Cristal",
    "Maravigold",
    "Zero defeitos",
    "Joia Rara",
    "Bonbonzinho",
    "Um pão",
    "Um neném",
]

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}