
/*var textorandom = [
    "Consegui",
    "AI MDS",
    "OLHA SÓ",
    "MATANDO O JAVASCRIPTO",
    "UHU", 
];

 var imagemrandom = [
     <img src="gatinho1.jpg">
     <
 ]
  
  /
 imagemrandom[0] = new Image();
 imagemrandom[0].src="gatinho1.jpg";
 imagemrandom[1].src="gatinho2.jpg";
 imagemrandom[2].src="gatinho3.jpg"; 


function sortearImagens(){
    var numero = Math.floor(Math.random()*3)
    document.getElementById('imagemrandomrandom').src='imagemrandom' = imagemrandom[numero]
};
*/

var imagens = [
    `<img src="./img/gatinho1.jpg">`,
    `<img src="./img/gatinho2.jpg">`,
    `<img src="./img/gatinho3.jpg">`,
]

function sortearImagens(){
    var random = Math.floor(Math.random()*3)
    document.getElementById('ondeVaoAsImagens').innerHTML = imagens[random]
}