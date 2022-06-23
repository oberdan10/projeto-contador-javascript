function Comparadordenumeros(numero1, numero2){
    let numeros_iguais;
    let condicaomaiorque10;
    let condicaomenorque20;
    let soma_numeros;

    soma_numeros = numero1 + numero2;

    numeros_iguais = (numero1===numero2) ? "são" : "não são";
    condicaomaiorque10 = (soma_numeros>10) ? "maior que" : "menor(ou igual) a";
    condicaomenorque20 = (soma_numeros<20) ? "menor que" : "maior(ou igual) a";

    console.log(`Os números ${numero1} e ${numero2} ${numeros_iguais} iguais. Sua soma é ${soma_numeros}, que é ${condicaomaiorque10} 10 e ${condicaomenorque20} 20.`);
}

Comparadordenumeros(5, 5);