//Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
//Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
//Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

function palindromo1(texto) {

    if(!texto) return;
    var textoSeparado = texto.split("").reverse(); //Texto Reverso
    texto = textoSeparado.join("");//Concatena Texto
    console.log(texto);
}

function substituindovalores(array) {
    if(!array) return console.log(-1); //Array Vazio valor -1

    const naoZero = (num) => num !== 0; //Valor e Tipo diferente de zero
	const numPar = (num) => num % 2 === 0; //Valor e Tipo igual a zero

    
    for (let i = 0; i < array.length; i++) { // Percorre todo o array
		if (numPar(array[i]) && naoZero(array[i])) { //Condicoes 1 e 2 verdadeiras realiza troca de valores
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
            // Verifica se valor é zero
			console.log('Ops, você já vale 0!');
		}
	}
	
console.log(array);
}

var array = [1, 0, 4, 6, 80, 33, 23, 90];
palindromo1("ama");
substituindovalores(array);