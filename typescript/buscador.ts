import { Articulo, Libro, Pelicula } from "./articulo";


export interface IBuscar {
    buscar(clave:string): Articulo[];
}


export class BuscadorLibro implements IBuscar {
    buscar(clave:string): Articulo [] {
        console.log('Buscando Libro por clave:', `${clave}`);

        const libro= new Libro('Libro1: iron man', 'autor1', 120, 'e23423432342aw');
        const libro1 = new Libro('Libro2: iron man', 'autor2', 130, 'e23423432324rr');
        const libro2 = new Libro('Libro3: iron man', 'autor3', 140, 'e234234323665vhb');

        return [libro, libro1, libro2];        
    }    
}

export class BuscadorPelicula implements IBuscar {
   
    buscar(clave:string): Articulo [] {
        console.log('Buscando Película por clave:', `${clave}`);

        const pelicula= new Pelicula('Película1: iron man1', 'autor', 150, 'WALT DYSNEY', 'BLUERAY');
        const pelicula1 = new Pelicula('Película2: iron man1', 'autor', 120, 'WALT DYSNEY', 'BLUERAY');
        const pelicula2 = new Pelicula('Película3: iron man1', 'autor', 110, 'WALT DYSNEY', 'BLUERAY');
        
        return [pelicula, pelicula1, pelicula2];
    }    
}


// otros buscadores!!!!

export class Buscador {
    
    private clave:string;
    private articulos:Articulo[]= [];
    private buscador:IBuscar;

    constructor(private iBuscar:IBuscar){
        // puede llegar desde fuera:
        // new BuscadorLibro()
        // new BuscadorPeliculas()
        // new BuscadorMusica()
        this.buscador = iBuscar;
    }

    public setClave(clave:string):void {
        this.clave = clave || '';
    }

    public buscarArticulos(): void {
        this.articulos =this.buscador.buscar(this.clave);
    }

    public getArticulos():Articulo[] {
        return this.articulos || [];
    }

    // el buscador va a guardar los resultados internamente
    /*
    public buscar(): void {
        
        console.log('Buscando', `${this.clave}`);

        const libro= new Libro('iron man', 'autor', 150, 'e23423432344');
        const libro1 = new Libro('iron man', 'autor', 150, 'e23423432344');
        const libro2 = new Libro('iron man', 'autor', 150, 'e23423432344');

        this.articulos.push(libro);
        this.articulos.push(libro1);
        this.articulos.push(libro2);

        //this.searchUser();        
    }
    */




    /*
    public function searchUser() {
        // fetch (api) que suele venir con los navegadores
        // axios (librería)
        // rxjs (angular)
        const endPoint = `https://reqres.in/api/users${page ? `?page=${page}` : ''}` ;
        
        //peticiones async
        fetch(endPoint)
            .then(response => response.json())                
            .then(data => {
                
                render('users', Users(data))
            });
    }
    */
}