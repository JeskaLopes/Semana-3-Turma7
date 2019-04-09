var textorandom = [
    "Consegui",
    "AI MDS",
    "OLHA SÓ",
    "MATANDO O JAVASCRIPTO",
    "UHU", 
];

function sortearFrases(){
    var numero = Math.floor(Math.random()*5)
    document.getElementById('titulorandom').innerHTML = textorandom[numero]
};