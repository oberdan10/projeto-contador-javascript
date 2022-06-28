//ATIVIDADE 1
//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
//ATIVIDADE 1.A
const numeros = [1, 3, 6, 9, 12];
console.log(numeros.map((numero) => numero * numero));


//ATIVIDADE 1.B
const mustang ={
    valor: 200000
}

const zafira ={
    valor: 20000
}

const celta ={
    valor: 15000
}

function mapArray() {
    const numeros = [1,2,3,4,5,6,7,8];

    return numeros.map(function (carro) {
        return  carro * this.valor;
    }, zafira); //MULTIPLICA NUMEROS POR VALOR DA ZAFIRA
}

console.log(mapArray());