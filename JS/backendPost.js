const button2 = document.getElementById('btn2');

// Ejemplo implementando el metodo POST:
async function postData() {
    let email = document.getElementById("emailComent").value;
    let nombre = document.getElementById("nombreComent").value;
    let comentario = document.getElementById("comentario").value;


    url = 'http://localhost:3001/api/alumnos' 
    data = {
        "email":`${email}`,"nombre":`${nombre}`,"comentario":`${comentario}`

      } 
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
} 

button2.onclick = function click() {
   postData();
};