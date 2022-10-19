// Play para la aplicación


function searchUser(page) {
    // fetch (api) que suele venir con los navegadores
    // axios (librería)
    // rxjs (angular)
    const endPoint = `https://reqres.in/api/users${page ? `?page=${page}` : ''}` ;
    
    //peticiones async
    fetch(endPoint)
        .then(response => response.json())                
        .then(data => {
            persistData(data);
            render('users', Users(data))
        });
}


function onInit()  {
    // disparar a la funcion Users del .js

    // invoca la función
    //const html = Users();

    // le asigna al div el código html
    render('users', Users());
    render('navbar', Navbar());
}



function render(id,html) {
    document.getElementById(id).innerHTML = html
}
/*function render(id,html) {
    document.getElementById(id).innerHTML = html;
}
*/

//disparo la función onInit
onInit();