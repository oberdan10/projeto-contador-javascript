//ATIVIDADE 1
//Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
//Crie uma função getAdmins que recebe um Map;
//Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
//Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.

const getAdmins = (map) => {
    let administrador = [];
    let financeiro = [];
    let pcp = [];
    let contabilidade = [];

    for ([key, value] of map) {
        if (value === 'Administrador') {
            administrador.push(key);
        } else if (value === 'Financeiro') {
            financeiro.push(key);
        }
        else if (value === 'PCP') {
            pcp.push(key);
        }
        else if (value === 'Contabilidade') {
            contabilidade.push(key);
        }
    }
    return ` Administradores: ${administrador}\n Financeiro: ${financeiro}\n Pcp: ${pcp}\n Contabilidade: ${contabilidade}`;
}

const usuarios = new Map();
usuarios.set('Oberdan', 'Administrador');
usuarios.set('Renan', 'Administrador');
usuarios.set('Marcio', 'Financeiro');
usuarios.set('Renato', 'PCP');
usuarios.set('Junior', 'Contabilidade');

console.log(`${getAdmins(usuarios)} \n`);

//ATIVIDADE 2
//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const numeros = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(numeros){
    let valores = new Set(numeros);
    return [...valores]; //Utilização de Spread para unificar o Set ao Array novo.
}

console.log(valoresUnicos(numeros));