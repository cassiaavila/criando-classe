var Vehicle = /** @class */ (function () {
    function Vehicle(ano, modelo, placa, cor) {
        this.ano = ano;
        this.modelo = modelo;
        this.placa = placa;
        this.cor = cor;
    }
    //toString é usado para descrever a classe
    Vehicle.prototype.toString = function () {
        return "Carro Ano ".concat(this.ano, ", Modelo ").concat(this.modelo, ", Placa ").concat(this.placa, ", Cor ").concat(this.cor);
    };
    Vehicle.prototype.print = function () {
        console.log("Carro Ano ".concat(this.ano, ", Modelo ").concat(this.modelo, ", Placa ").concat(this.placa, ", Cor ").concat(this.cor));
    };
    return Vehicle;
}());
function main() {
    var car = new Vehicle("2013", "Corsa", "olx-1997", "Azul");
    car.print();
    //console.log(car.toString())
}
main();
