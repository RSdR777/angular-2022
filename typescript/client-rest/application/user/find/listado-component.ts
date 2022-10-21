import { AxiosReqRestRestClient } from "../../../infraestructure/user/client-rest";
import { UsuarioRepository } from "../../../../repository";

export class ListadoComponent {
    // play del listado
    
    // se asume que service ya viene instanciado desde afuera
    constructor(
        private service: AxiosReqRestRestClient,
        private reposotory: UsuarioRepository
    ) {

    }

    onInit() {
        
        // crear mi servicio que consume el API externo
        // con el constructor no necesito hacer esto: const servive = new AxiosReqRestRestClient();
        
        // traigo el listado
        const users = this.service.getUsers();
        console.log(users);

        // ahora creo los usuarios con la respuesta del servicio
        users.data.forEach(user=> this.reposotory.create(
            {
             codigo: user.id, 
             name: user.first_name,
             sector: user.email
            }
        ));


        // traigo el listado
        const singleUser = this.service.getUsers();
        console.log(singleUser);

    }
}