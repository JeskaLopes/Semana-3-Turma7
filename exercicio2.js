//crie uma função para converter bitcoins em reais

function converter(){
    var bitcoin = prompt("Quantos bitcoins você quer converter ?")
    var cotacao = prompt("Quantos reais vale 1 bitcoin hoje ?")

    var resultado = bitcoin * cotacao;
    alert("Você teria" + resultado)
} 