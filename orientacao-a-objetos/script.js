class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    //getter e setter
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        return this._saldo = valor;
    }

    //métodos
    sacar(valor){
        try {
            if(valor > this._saldo) throw new Error("Proibido saque, maior que Saldo!")
            this._saldo = this._saldo - valor;
            return this._saldo;
        } catch (error) {
            console.log(error.message)
        }
    }

    depositar(valor){
        this._saldo = this._saldo + valor
        return this._saldo;
    }
}


//CLASSES FILHAS
class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);

        this.tipo = 'conta corrente';
        this._cartaoCredito = cartaoCredito;
    }

    //getter e setter
    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(cartao){
        return this._cartaoCredito = cartao;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta poupanca';
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta universitaria';
    }

    //métodos
    sacar(valor){
        try {
            if(valor > this._saldo) throw new Error("Proibido saque, maior que Saldo!")
            if(valor >= 500) throw new Error("Proibido saque maior que 500 Reais!")
            this._saldo = this._saldo - valor;
        } catch (error) {
            console.log(error.message);
        }
    }
}