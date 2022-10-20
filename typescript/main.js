"use strict";
exports.__esModule = true;
var articulo_1 = require("./articulo");
var buscador_1 = require("./buscador");
// creo una instancia libro
var libro = new articulo_1.Libro('iron man', 'autor', 150, 'e23423432344');
//libro.toString();
// clave obtenida desde el browser
var claveBusqueda = 'iron man';
// desde afuera defino la instancia particular
var buscadorPeliculas = new buscador_1.Buscador(new buscador_1.BuscadorPelicula());
// invoco la búsqueda
buscadorPeliculas.setClave(claveBusqueda);
buscadorPeliculas.buscarArticulos();
var peliculas = buscadorPeliculas.getArticulos();
//console.log(articulos);
console.log('Películas encoontradas:');
peliculas.forEach(function (articulo) {
    articulo.toString();
});
var buscadorlibros = new buscador_1.Buscador(new buscador_1.BuscadorLibro());
// invoco la búsqueda
buscadorlibros.setClave(claveBusqueda);
buscadorlibros.buscarArticulos();
var libros = buscadorlibros.getArticulos();
console.log('Libros encontrados:');
libros.forEach(function (articulo) {
    articulo.toString();
});
