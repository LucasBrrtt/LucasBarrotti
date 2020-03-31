var Conta = require('./Conta.js');
var Poupanca = require('./Poupanca.js');
var Corrente = require('./Corrente.js');

var conta1 = new Conta();
conta1.deposito(105);
conta1.saque(1000);

var p = new Poupanca();
var c = new Corrente();
p.deposito(10);
p.getSaldo();
p.getSaldo();
c.VerificaLimite();
c.VerificaJuros();