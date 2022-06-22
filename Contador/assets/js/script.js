const numero_span = document.getElementById("numero");
const adicionar = document.getElementsByName("adicionar");
const subtrair = document.getElementsByName("subtrair");
let numero = 0;

function increment() {

    if(numero < 10 ){
        numero = numero + 1;
        numero_span.innerHTML = numero;
        numero_span.style.color = "black"
    }else{
        numero_span.style.color = "red"
        addEventListener('click', disabled(true));
    }

}

function decrement() {

    if(numero >= 1){
        numero = numero - 1;
        numero_span.innerHTML = numero;
        numero_span.style.color = "black"
    }else{
        numero_span.style.color = "red"
        addEventListener('click', disabled(false));
    }

}

function disabled(a){
    if(a){
        adicionar.enabled = true;
        subtrair.enabled = false;
    }else{
        adicionar.enabled = false;
        subtrair.enabled = true;
    }
}