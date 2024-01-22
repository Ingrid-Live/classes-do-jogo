class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque indefinido";
        }

        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Dados de uso:
const heroi1 = new Heroi("Herói1", 25, "mago");
const heroi2 = new Heroi("Herói2", 30, "guerreiro");

heroi1.atacar(); // mensagem: "O mago atacou usando magia"
heroi2.atacar(); // mensagem: "O guerreiro atacou usando espada"
