
//llamo al id boton presente en la sección newsletter para que al darle click trabaje la función que evalúa el valor ingresado por el usuario
//valores para los id nombre, email y direccion
//si los campos se encuentran vacíos arrojar un alert que pida el ingreso de datos
//si ingresa los datos correctamente arrojar un alert que diga muchas gracias

document.getElementById("boton").addEventListener("click",
	function usuario(){
		var nombre=document.getElementById("nombre").value;
		var email=document.getElementById("email").value;
		var direccion=document.getElementById("direccion").value;

		if(nombre.length == "" || email.length == "" || direccion.length ==""){
			alert("Ingresa tus datos");
		}else{
			alert("Muchas gracias por suscribirse")
		}
	})