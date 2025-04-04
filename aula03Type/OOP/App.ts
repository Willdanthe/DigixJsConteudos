import { Pessoa } from "./Pessoa";
import { Corrente, Poupanca } from "./Conta"


function Main(): void {
    try {
        // Instanciando os objetos
        const cliente1: Pessoa = new Pessoa("Willdanthê", 20);
        const cliente2: Pessoa = new Pessoa("Zilda", 20);

        const contaCorrente = new Corrente(cliente1, 1000, 500);
        const contaPoupanca = new Poupanca(cliente2, 2000, 50);

        // Operações Financeiras
        contaCorrente.depositar(500);
        contaCorrente.sacar(1500);
        console.log(
            contaCorrente.exibirDados()
        );


        contaPoupanca.aplicarRendimento();
        contaPoupanca.sacar(300);
        console.log(
            contaPoupanca.exibirDados()
        );
    } catch (error: any) {
        console.error("Erro:", error.message);
    }
}

Main()
console.log("oi");

