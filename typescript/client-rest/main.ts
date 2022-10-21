import { ListadoComponent } from "./application/user/find/listado-component";
import { AxiosReqRestRestClient } from "./infraestructure/user/client-rest";
import { UsuarioRepository } from "../repository";

const service = new AxiosReqRestRestClient();

const repository = new UsuarioRepository();
const listadoComponent = new ListadoComponent(service, repository);
listadoComponent.onInit();