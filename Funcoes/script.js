//ATIVIDADE 1
//Crie uma função que recebe o array alunos e um número que irá representar a média final;
//Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
//Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

const alunos = [
    {   nome: 'Oberdan', nota: 10   },  {   nome: 'Caio', nota: 9   },   {   nome: 'Mateus', nota: 6.6   }
];
const media = 7;

function mediafinal(alunos, media) {
    let aprovados = [];
    let reprovados = [];

    for (let i = 0; i < alunos.length; i++){
        let {nota , nome} = alunos[i];

        if(nota >= media){
            aprovados.push(nome);
        }else{
            reprovados.push(nome);
        }
    }
    console.log(`Aprovados: ${aprovados} \nReprovados: ${reprovados}`);
}

console.log("Atividade 1:")
mediafinal(alunos, media);


//ATIVIDADE 2
//Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
const funcionario1 = {nome: 'Oberdan', idade:25};
const funcionario2 = {nome: 'Alexandre', idade:44};
const funcionario3 = {nome: 'Marcos', idade:32};
const funcionario4 = {nome: 'Idara', idade:29};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log("\nAtividade 2:")
console.log(calculaIdade.call(funcionario1, 40));
console.log(calculaIdade.apply(funcionario2, [24]));
console.log(calculaIdade.call(funcionario3, 10));
console.log(calculaIdade.apply(funcionario4, [5]));