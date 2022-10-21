"use strict";
exports.__esModule = true;
exports.ListadoComponent = void 0;
var ListadoComponent = /** @class */ (function () {
    // play del listado
    // se asume que service ya viene instanciado desde afuera
    function ListadoComponent(service, reposotory) {
        this.service = service;
        this.reposotory = reposotory;
    }
    ListadoComponent.prototype.onInit = function () {
        // crear mi servicio que consume el API externo
        // con el constructor no necesito hacer esto: const servive = new AxiosReqRestRestClient();
        var _this = this;
        // traigo el listado
        var users = this.service.getUsers();
        console.log(users);
        // ahora creo los usuarios con la respuesta del servicio
        users.data.forEach(function (user) { return _this.reposotory.create({
            codigo: user.id,
            name: user.first_name,
            sector: user.email
        }); });
        // traigo el listado
        var singleUser = this.service.getUsers();
        console.log(singleUser);
    };
    return ListadoComponent;
}());
exports.ListadoComponent = ListadoComponent;
