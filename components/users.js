//Obtenido de https://reqres.in/ ejemplo GET 
  
//new 
/*const users_json = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
};
*/





/*
   "componente"
*/
function Users(users) {
    
    if (!users) {
        return `
            <h1>No hay datos</h1>
            <button class="btn btn-info" onclick="searchUser(1)">Obtener 
        `;
    }
    
    const userHTML = `
        <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Avatar</th>
        </tr>
        </thead>
        <tbody>
            ${users.data.map(user => User(user)).join('')}   
        </tbody>
    </table>
    ${Paginator(users.page, users.total_pages)}
    `;

    return userHTML;
}

function User(user) {

    if (!user) {
        return `No hay datos`;
    }

    const html = `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.email}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>
                <img src="${user.avatar}">
            </td>
        </tr>
    `;
    return  html;
}

function Paginator (currentPage, totalPage) {
    const html = `
    <nav aria-label="...">
        <ul class="pagination justify-content-center">
            <li class="page-item ${currentPage > 1 ? '' : 'disabled'}">
                <a class="page-link" href="javascript:()=>{}" tabindex="-1" aria-disabled="true" ${currentPage > 1 ? `onclick="searchUser(${currentPage-1})"`  : ''} >
                    Previous
                </a>
            </li>        
            
            ${Pagina(currentPage, totalPage)}

            <li class="page-item ${currentPage === totalPage ? 'disabled' : ''}" >
                <a class="page-link" href="javascript:()=>{}" aria-disabled="true" ${currentPage !== totalPage ? `onclick="searchUser(${currentPage+1})"`  : ''} >
                    Next
                </a>
            </li>
        </ul>
    </nav>
    `;
    return  html;
}

function Pagina(currentPage, totalPage) {
    let paginas = '';
    for (let i=1; i<=totalPage;i++) {
       
        paginas+=`
            <li class="page-item ${i === currentPage ? 'active' :''}" aria-current="page">                
                <a class="page-link" href="javascript:()=>{}" ${i !== currentPage ? `onclick="searchUser(${i})"` : ''}>${i}</a>
            </li>
        `;
    }
    return paginas;
}
