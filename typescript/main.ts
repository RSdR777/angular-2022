import { Libro } from "./articulo";
import { Buscador, BuscadorPelicula, BuscadorLibro } from "./buscador";

// creo una instancia libro
const libro = new Libro('iron man', 'autor', 150, 'e23423432344');
//libro.toString();

// clave obtenida desde el browser
const claveBusqueda = 'iron man';

// desde afuera defino la instancia particular
const buscadorPeliculas = new Buscador(new BuscadorPelicula());
// invoco la búsqueda
buscadorPeliculas.setClave(claveBusqueda);
buscadorPeliculas.buscarArticulos();
const peliculas = buscadorPeliculas.getArticulos();

//console.log(articulos);
console.log('Películas encoontradas:');
peliculas.forEach(articulo => {
    articulo.toString();
    
});

const buscadorlibros = new Buscador(new BuscadorLibro());
// invoco la búsqueda
buscadorlibros.setClave(claveBusqueda);
buscadorlibros.buscarArticulos();
const libros = buscadorlibros.getArticulos();

console.log('Libros encontrados:');
libros.forEach(articulo => {
    articulo.toString();
    
});



