//ATIVIDADE 1
//Filtre e retorne todos os números pares de um array.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

function Pares(numeros){
    if(!numeros) return;

    return numeros.filter((valor) => valor % 2 === 0);
}

console.log(Pares(numeros));