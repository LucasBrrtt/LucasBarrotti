// Atributos = limite e taxas
// Verifica limite, verifica juros

var Conta = require('./Conta.js');

var Corrente = function(){
    this.limite = 500;
    this.datajuros = new Date('2020-04-01');
}

Corrente.prototype = new Conta();

Corrente.prototype.VerificaLimite = function(saque){
    if(saque <= (this.limite + this.saldo) ){
        console.log('Sucesso');
    }else{
        console.log('Impossivel');
    }
}

Corrente.prototype.VerificaJuros = function(dataAtual){
    if(this.datajuros.getDay() >  this.dataAtual.getDay()){
        return true;
    }else{
        return false;
    }
}

module.exports  = Corrente;