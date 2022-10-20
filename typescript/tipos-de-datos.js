//const edad = 10;
//let altura:number = 175;
// altura = 'hola';  // es un lenguaje fuertemente tipado
;
var persona = {
    dni: 12345678,
    apellido: 'lopez',
    altura: 175
};
;
// se crea una clase para cumplir el contrato de la interfaz
var Perosna = /** @class */ (function () {
    // constructor
    // no se permiten otras definiciones del constructor
    function Perosna(dni, apellido, altura) {
        this.setApellido(apellido);
        this.setAltura(altura);
    }
    // getter & setters
    // interfaces públicas que permiten el acceso a propiedades privadas
    Perosna.prototype.getDni = function () {
        return this.dni;
    };
    Perosna.prototype.getApellido = function () {
        return this.apellido;
    };
    Perosna.prototype.getAltura = function () {
        return this.altura;
    };
    Perosna.prototype.hablar = function (palabra) {
        console.log(palabra);
    };
    // no pongo setter porque asumo que el DNI es inmutable
    Perosna.prototype.setApellido = function (apellido) {
        this.apellido = apellido || '';
    };
    Perosna.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    return Perosna;
}());
// clase abstracta
/*
abstract class Articulo {
    // al definir así los atributos, estos son accesibles desde fuera sin getters ni setters
    constructor(
        public titulo:string,
        public autor:string,
        public precio:number) {

    }
}
*/
//node!
// creo una instancia libro
var libro = new Libro('iron man', 'autor', 150, 'e23423432344');
libro.toString();
