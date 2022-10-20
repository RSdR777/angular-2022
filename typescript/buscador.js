"use strict";
exports.__esModule = true;
exports.Buscador = exports.BuscadorPelicula = exports.BuscadorLibro = void 0;
var articulo_1 = require("./articulo");
var BuscadorLibro = /** @class */ (function () {
    function BuscadorLibro() {
    }
    BuscadorLibro.prototype.buscar = function (clave) {
        console.log('Buscando Libro por clave:', "".concat(clave));
        var libro = new articulo_1.Libro('Libro1: iron man', 'autor1', 120, 'e23423432342aw');
        var libro1 = new articulo_1.Libro('Libro2: iron man', 'autor2', 130, 'e23423432324rr');
        var libro2 = new articulo_1.Libro('Libro3: iron man', 'autor3', 140, 'e234234323665vhb');
        return [libro, libro1, libro2];
    };
    return BuscadorLibro;
}());
exports.BuscadorLibro = BuscadorLibro;
var BuscadorPelicula = /** @class */ (function () {
    function BuscadorPelicula() {
    }
    BuscadorPelicula.prototype.buscar = function (clave) {
        console.log('Buscando Película por clave:', "".concat(clave));
        var pelicula = new articulo_1.Pelicula('Película1: iron man1', 'autor', 150, 'WALT DYSNEY', 'BLUERAY');
        var pelicula1 = new articulo_1.Pelicula('Película2: iron man1', 'autor', 120, 'WALT DYSNEY', 'BLUERAY');
        var pelicula2 = new articulo_1.Pelicula('Película3: iron man1', 'autor', 110, 'WALT DYSNEY', 'BLUERAY');
        return [pelicula, pelicula1, pelicula2];
    };
    return BuscadorPelicula;
}());
exports.BuscadorPelicula = BuscadorPelicula;
// otros buscadores!!!!
var Buscador = /** @class */ (function () {
    function Buscador(iBuscar) {
        this.iBuscar = iBuscar;
        this.articulos = [];
        // puede llegar desde fuera:
        // new BuscadorLibro()
        // new BuscadorPeliculas()
        // new BuscadorMusica()
        this.buscador = iBuscar;
    }
    Buscador.prototype.setClave = function (clave) {
        this.clave = clave || '';
    };
    Buscador.prototype.buscarArticulos = function () {
        this.articulos = this.buscador.buscar(this.clave);
    };
    Buscador.prototype.getArticulos = function () {
        return this.articulos || [];
    };
    return Buscador;
}());
exports.Buscador = Buscador;
