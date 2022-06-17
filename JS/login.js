//Funcion oara cargar datos de la APIRest
$(document).ready(function(){
	let element = document.getElementById('loginBtn')
	element.addEventListener('click',()=>{
		
        let nc = document.getElementById("usernameField").value
		console.log(nc)
		
        window.fetch(
				'http://localhost:3001/api/alumnos/'+nc,
				{method: 'GET', headers:{"Content-Type": "application/json"},
				}
		)
       
		.then((respuesta)=>respuesta.json())
		.then((data)=>{
			data.Alumnos.forEach((alumno)=>{
				console.log(alumno)
			})
            
		})
        

        //window.alert("hola")
	})
})