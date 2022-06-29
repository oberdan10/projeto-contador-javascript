//O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.
//Crie uma função que recebe um array e um número
//Realize as seguintes validações
//Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
//Se o array não for do tipo 'object', lance um erro do tipo TypeError
//Se o número não for do tipo 'number', lance um erro do tipo TypeError
//Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
//Utilize a declaração try...catch
//Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

function validaArray(array, numero){
    try {
        if(!array || !numero ) throw new ReferenceError("Parâmetros não foram enviados!");
        if(typeof array !== 'object') throw new TypeError("Array não é object!");
        if(typeof numero !== 'number') throw new TypeError("Numero não é tipo número!");
        if(array.length !== numero) throw new RangeError("Array diferente de número!"); 
    
        return array;

        } catch (error) {
        		if (error instanceof RangeError) {
			console.log('RangeError!');
			console.log(error.stack);
		} else if (error instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(error.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(error.stack);
		}
    }
}

console.log(validaArray([0,1,2,3,4,5], 6));