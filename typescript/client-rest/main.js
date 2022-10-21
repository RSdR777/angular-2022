"use strict";
exports.__esModule = true;
var listado_component_1 = require("./application/user/find/listado-component");
var client_rest_1 = require("./infraestructure/user/client-rest");
var repository_1 = require("../repository");
var service = new client_rest_1.AxiosReqRestRestClient();
var repository = new repository_1.UsuarioRepository();
var listadoComponent = new listado_component_1.ListadoComponent(service, repository);
listadoComponent.onInit();
