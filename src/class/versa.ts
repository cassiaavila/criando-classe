import {Vehicle} from "./vehicle";

class Versa extends Vehicle {

    private preco: number
    private extraModelo: string

    constructor(ano: string, extraModelo: string, placa: string, cor: string, preco: number) {
        super(ano, "Versa " + extraModelo, placa, cor);
        this.preco = preco;
        this.extraModelo = extraModelo;
    }

    public print() {
        console.log(`Carro Ano ${this.ano}, Modelo ${this.modelo}, Placa ${this.placa}, Cor ${this.cor}, Preco ${this.preco},`);
    }


}
