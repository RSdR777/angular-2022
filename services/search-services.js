
function filterSearch(key) {
    // buscar en algún lugar

    // localStorage / sessionStorage
    const userInStorage = getData();
    if (userInStorage) {
        // for comparando por campos
        userInStorage.data = userInStorage.data.filter(user => user.email.includes(key) ||  user.first_name.includes(key) || user.last_name.includes(key));        
        const html = Users(userInStorage);
        document.getElementById('users').innerHTML = html
    }
}

function persistData(data) {
    localStorage.setItem('users', JSON.stringify(data));
}


function getData() {
    const data = localStorage.getItem('users');
    return data ? JSON.parse(data) : undefined;
}