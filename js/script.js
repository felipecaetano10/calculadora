var booleana = true;
console.log(booleana);

var booleana = false;
console.log(booleana);

var pessoa = {nome:"Felipe",idade:20};

var numero = 1;

console.log(numero);
console.log(typeof(numero));

numeroPi = Math.PI;
console.log(numeroPi);
console.log(typeof(numeroPi));

var n1 = 10;
var n2 = 5;

console.log('soma: ', n1+n2);
console.log('subtração: ', n1-n2);
console.log('multiplicação: ', n1*n2);
console.log('divisão: ', n1/n2);
console.log('Potência n1 elevado a n2: ', Math.pow(n1,n2));
console.log('Raíz quadrada de 25: ', Math.sqrt(25));

var pi = Math.PI;
console.log(Math.round(pi));

// Calculadora

window.alert('Bem vindo a calculadora em Javascript!');
var opcao = parseInt(window.prompt('Digite a opção\n\n1 - Soma\n\n2 - Subtração\n\n3- Divisão\n\n4 - Multiplicação'));

var numero1 = parseFloat(window.prompt('Digite o primeiro número'));
console.log(numero1);
var numero2 = parseFloat(window.prompt('Digite o segundo número'));
console.log(numero2);
var resultado;

function showResult(resultado){
    window.alert('Resultado: ' + resultado);         
}

switch(opcao) {
    case 1:
        resultado = numero1 + numero2;
        showResult(resultado);
        break;
    case 2:
        resultado = numero1 - numero2;
        showResult(resultado);
        break;
    case 3:
        resultado = numero1 / numero2;
        showResult(resultado);        
        break;
    case 4:
        resultado = numero1 * numero2;
        showResult(resultado);        
        break;       
    default:
        window.alert('Opção inválida;');         
}