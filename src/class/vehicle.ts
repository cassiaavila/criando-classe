export class Vehicle {
    protected ano: string;
    protected  modelo: string;
    protected  placa: string;
    protected  cor: string;
    constructor(ano: string, modelo: string, placa: string, cor: string) {
        this.ano=ano;
        this.modelo =modelo;
        this.placa =placa;
        this.cor = cor;
    }

    //toString é usado para descrever a classe
    public toString (): string{
        return `Carro Ano ${this.ano}, Modelo ${this.modelo}, Placa ${this.placa}, Cor ${this.cor}`;
    }
    public print (){
        console.log (`Carro Ano ${this.ano}, Modelo ${this.modelo}, Placa ${this.placa}, Cor ${this.cor}`)
    }


}

function main(){
    const car = new Vehicle("2013", "Corsa", "olx-1997", "Azul" )
    car.print()
    //console.log(car.toString())
}
main()
