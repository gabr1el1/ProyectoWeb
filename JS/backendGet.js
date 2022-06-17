const button = document.getElementById('btn');
async function GetData() {

    let comments = []


    url = 'http://localhost:3001/api/alumnos'
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', 

    })
    .then((respuesta)=>respuesta.json())
    .then((data)=>{

        data.Alumnos.forEach((alumno)=>{
            console.log(alumno)
            /*
            var div = document.createElement('div');
            div.innerHTML = `<p>Ver comentarios:${alumno.comentario}</p>`
            document.body.appendChild(div)
            */
           let arrTemporal = [alumno.email,alumno.nombre,alumno.comentario]
           comments.push(arrTemporal)
        })
        displayComments(comments)
    })
    .catch((error)=>{
        console.log(error)
    })

}

const displayComments = (comms)=>{
    const comSection = document.getElementById("commentList")
    const htmlString = comms.map((com)=>{

        return `
            <li class="comment">
                <p>${com[0]}</p>
                <p>${com[1]}</p>
                <p>${com[2]}</p>
            </li>
        `;
        
    })
    .join('');
    comSection.innerHTML = htmlString;
}

button.onclick = function click() {
    GetData();

};