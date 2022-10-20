export abstract class Articulo {
    private titulo:string;
    private autor:string;
    private precio:number;
    
    constructor(titulo:string,  autor:string,  precio:number) {
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
    }

    // método abstracto --> Se debe implementar en los hijos
    //public abstract toString():void;

    // protected porque solo lo van a usar los hijos
    // para los hijos es público
    // se pone como public porque lo vamos a usar desde main.ts
    public toString(): void {
         console.log(JSON.stringify(this));
    }
    
}


// clase hija
export class Libro extends Articulo {

    // atributos propios
    private isbn: string;
    
    constructor (titulo:string, 
                autor:string,  
                precio:number,
                isbn: string) 
    {        
        // primero tiene que nacer el 'padre'
        super(titulo, autor, precio);
        // el hijo setea sus atributos
        this.isbn = isbn;
    }
}


export class Pelicula extends Articulo {

    // atributos propios
    private productora: string;
    private formato: string;
    
    constructor (titulo:string, 
                autor:string,  
                precio:number,
                productora: string,
                formato: string) 
    {        
        // primero tiene que nacer el 'padre'
        super(titulo, autor, precio);
        // el hijo setea sus atributos
        this.productora = productora;
        this.formato = formato;
    }
}