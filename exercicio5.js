function sairProRole(dinheiros){
    if (dinheiros > 10 && dinheiros < 100){
        return "Bora Sair!"
    }

    else if( dinheiros > 100 && dinheiros < 10000){
        return "Eu pago!"
    }

    else if (dinheiros > 1000){
        return  "UHULLLL"
    }
    else{
        return "netflix!"
    }
}


function calcularIMC(){
var altura = prompt("Qual a sua Altura?");
var peso = prompt("Qual o seu peso?");
var calculo = (peso/(altura*altura)).toFixed(2);

console.log ("Seu IMC é igual a: " + calculo)

if(calculo <18){ console.log ("Você é saudável")}
}