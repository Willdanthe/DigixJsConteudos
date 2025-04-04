import { Pessoa } from './Pessoa';

export class Conta {
    protected Titular: Pessoa;
    protected saldo: number;

    constructor(titular: Pessoa, saldo: number) {
        this.Titular = titular
        this.saldo = saldo;
    }
    /**
     * depositar
     */
    public depositar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de depósito deve ser positivo.");
        console.log(`Saldo antigo: ${this.saldo}`);

        this.saldo += valor;
        console.log(`Saldo Novo: ${this.saldo}`);

    }

    public sacar(valor: number): void {
        if (valor < 0) {
            throw new Error("Valor do saque deve ser positivo.");

        }
        else if (valor > this.saldo) {
            throw new Error("Saldo Insuficiente!");
        }
        console.log(`Saldo antigo: ${this.saldo}`);

        this.saldo -= valor;

        console.log(`Saldo Novo: ${this.saldo}`);
    }

    public exibirDados(): string {
        return `Titular: ${this.Titular.getNome()}, Saldo: R$${this.saldo}`;
    }
}

export class Poupanca extends Conta {
    private taxaRendimento: number;

    constructor(titular: Pessoa, saldo: number, taxaRendimento: number) {
        super(titular, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    public getTaxaRendimento(): number{
        return this.taxaRendimento;
    }

    public aplicarRendimento(): void {
        this.saldo += this.saldo * (this.taxaRendimento / 100);
    }

    // Polimorfismo de subescrever o método
    public override exibirDados(): string {
        return `Titular: ${this.Titular.getNome()}, Saldo: ${this.saldo},Rendimento: ${this.getTaxaRendimento()}`;

    }
}

export class Corrente extends Conta{
    private limiteChequeEspecial: number;

    constructor(titular: Pessoa, saldo: number, limiteChequeEspecial: number) {
        super(titular, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public getLimite(): number {
        return this.limiteChequeEspecial;
    }

    public override sacar(valor: number): void{
        if (valor > this.saldo + this.getLimite()) throw new Error("Valor de saque excede o limite do cheque especial.");
        
        this.saldo -= valor;
    }

    public override exibirDados(): string {
        return `Nome: ${this.Titular.getNome()}, Idade: ${this.Titular.getIdade()}, Cheque Especial: ${this.getLimite()}`;
    }
}