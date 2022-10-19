const btnSearch = document.getElementById('btnSearch');

// asignar el evento
btnSearch.addEventListener('click', ()=> {
    console.log('blah, blah')
});

function onClickSearch() {
    //capturar div por su id
    const div = document.getElementById('info');

    // Esta es la opción que más se usa para incluir elementos
    // Se usa con Alt + 96 para las comillas
    div.innerHTML = `<p>Soy un párrafo</p>`

    // Se inyecta como objeto, no como texto
    const p = document.createElement('p');

    
    console.log(p);
}

btnSearch.addEventListener('click', onClickSearch);

onClickSearch2 = function() {
    console.log('estoy dentro de onClickSearch2');
}

//btnSearch.addEventListener('click', onClickSearch2);



