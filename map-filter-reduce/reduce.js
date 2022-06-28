//ATIVIDADE 1
//Some todos os números de um array

function somaNumeros(numeros){
    if(!numeros || !numeros.length) return;
    const soma = numeros.reduce((prev, cur) => prev + cur);
    return soma;
}

console.log(somaNumeros([1,2,3,4,5]));

//ATIVIDADE 2
//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

var saldo = 350;
const produtos = [
    { nome: 'Telefone', valor: 70.85 }, { nome: 'Martelo', valor: 15.89 }, { nome: 'Bloco de Barro', valor: 5.99 }, { nome: 'Carrinho de Mão', valor: 300 }
]

function saldoFinal(saldo, produtos){
    if( !produtos || !produtos.length) return 'Envie todos os parâmetros';
    const soma = produtos.reduce((acc, item) => acc - item.valor, saldo);
    return `O saldo final será de ${soma} reais`;
}

console.log(saldoFinal(saldo, produtos));