// filter() array de cosas filtradas
// .map() convirte
// every  determina si todos cumple una condición
// some determina si alguno cumple una condición
// reduce()
// find()
// findIndex()

const personas = {
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
            "avatar": "https://reqres.in/img/faces/7-image.jpg",
            "age": 36
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg",
            "age": 44
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg",
            "age": 54
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg",
            "age": 35
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg",
            "age": 48
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg",
            "age": 39
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
};

console.log(personas);

// filter
const clave = 'on';
const personasFiltradas = [];
for (let i=0;i<personas.data.length;i++) {
    const persona = personas.data[i];
    if (persona.last_name.includes(clave)) {

        if(persona.first_name.toUpperCase().includes(clave) ||
           persona.last_name.toUpperCase().includes(clave) ||
           persona.email.toUpperCase().includes(clave)) {
                personasFiltradas.push(persona);
           }
    }    
}
console.log('for común: ',personasFiltradas);    

// equivale al anterior (oersiba filtrada por un parámetro)
// se le incluye un arrow function
/*
const personasConFilter = personas.data.filter(oersona => persona.first_name.toUpperCase().includes(clave) ||
                persona.last_name.toUpperCase().includes(clave) ||
                persona.email.toUpperCase().includes(clave)); // se incluye la expresión lambda para incluir lo que se quiere

console.log('filter', personasConFilter);*/

const filtrar = (persona) => {
   return personas.data.filter(oersona => persona.first_name.toUpperCase().includes(clave) ||
                persona.last_name.toUpperCase().includes(clave) ||
                persona.email.toUpperCase().includes(clave));
}

const personasConFilter2 = personas.data.filter(persona => filtrar(persona));
console.log('filter2', personasConFilter2);

// Obtener solo email
const personasEmails = [];
for (let i=0;i<personas.data.length;i++) {
    const persona = personas.data[i];
    personasEmails.push(persona.email);           
}    


// Obtener solo id e email
const convertToAlgo = (persona) => {
    return `${persona.id}, ${persona.email}`;
}
const personasIdEmails = [];
for (let i=0;i<personas.data.length;i++) {
    const persona = personas.data[i];
    personasIdEmails.push(convertToAlgo(persona));               
}

//.map()
const emails = personas.data.map(persona => persona.email); //qué quiero
console.log(emails);

const idEmails = personas.data.map(persona => convertToAlgo(persona)); //qué quiero
console.log(idEmails);


// verificar si todos tienen @request
let todos = true;
for (let i=0;i<personas.data.length;i++) {
    if (!personas.data[i].email.includes('request')) {
        todos = false;
        break;
    }
} 

// every
todos = personas.data.every(persona => persona.email.includes('request'));
console.log('todos:', todos);

//todos
/*function todosConMismoDominio(personas) {
    const emails = personas.data.map(persona => persona.email);    
    const dominio = 'reqres';
    return emails.filter(email => email.includes(dominio));  
}
console.log('emails final:', todosConMismoDominio(personas));
*/

// alguno se llama 'George'
function alguno(personas) {
    let alguno = false;
    for (let i=0; i<personas.data.length;i++) {
        if (personas.data[i].first_name.includes('George')) {
            alguno = true;
            break;
        }
    } 
    return alguno;
}
console.log('alguno', alguno(personas));

function alguno_bis(personas) {
    let alguno = false;
    for (let i=0; !alguno && i<personas.data.length;i++) {
        alguno = personas.data[i].first_name.includes('George');
    } 
    return alguno;
}
console.log('alguno', alguno_bis(personas));

const existeGeorge = personas.data.some(p=> p.first_name.includes('George'));
console.log('George:', existeGeorge);

// suma de las edades de todas las personas
// se reduce todo el objeto a un solo valor
const edades = personas.data.reduce((valor_prev, current) => valor_prev + current.age, 0);
console.log('edades:', edades);
/*
[0, actual] => prev + current
[1, actual] => 1 + current
*/

const nombres = personas.data.reduce((valor_prev, current) => valor_prev + current.first_name + ',', 0);
console.log('nombres:', nombres);

// find 
// Indica el índice de la persona 
const idxPersona36 = personas.data.findIndex(persona => persona.age === 36);
console.log("idxPersona36:", idxPersona36);

const aux = personas.data.find(persona => persona.age === 36);
console.log("aux:", aux);

