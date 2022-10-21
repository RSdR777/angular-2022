import { Factura, FacturaParams } from "../../domain/user/factura";
import { Repository, Usuario, UsuarioParams } from "../../domain/user/usuario";



// clase que se encargará de hacer las operaciones CRUD sobre la tabla usuario
export class UsuarioRepository implements Repository<UsuarioParams, Usuario> {
    create(params: UsuarioParams): Usuario {
       
       console.log('UsuarioRepository > params', params);
        //logica
        // db.connection()

        //db.insert()

        return {
            id:1,
            nombre: 'Primer registro',
            sector: 'sector'
        }
    }

}



export class FacturaRepository implements Repository<FacturaParams, Factura> {    
    // tiene un constructor por defecto

    create(entity:FacturaParams):Factura {
        console.log('FacturaRepository > params', params);
        return new Factura(1, 1500)
    }
}

const facturaRepository = new FacturaRepository();
const params:FacturaParams = {

    codigo:Math.random(),
    name:'factura random',
    fecha: new Date()
}
const factura:Factura = facturaRepository.create(params);
console.log(factura);