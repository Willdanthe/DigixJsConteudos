export class Pessoa {
    private nome: string;
    private idade: number;

    // Construtor
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // Getters e setter para ter acesso

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade
    }

    public SetNome(novonome: string): void {
        if (novonome.length < 3) {
            throw new Error("Nome de deve ter mais de 2 caracteres");
        }
        this.nome = novonome;
    }


    public SetIdade(novoidade: number): void {
        if (novoidade < 0) {
            throw new Error("Idade não pode ser negativa");
        }

        this.idade = novoidade;
    }

    public exibirDados(): string {
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
}

