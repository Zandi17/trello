
window.addEventListener("load", function() {
		var contenedor = document.getElementById("contenedor");
		var lista = document.getElementById("lista");

		lista.addEventListener("click", function() {
		lista.style.display = 'none';
		anidar();
				
		contenedor.classList.add("pao")
		});

		function anidar(){
		var form =document.createElement("form");
		contenedor.insertBefore(form,contenedor.childNodes[0]);
		form.classList.add("fondo")

		var input =document.createElement("input");
		form.insertBefore(input,form.childNodes[0]);
		input.classList.add("ipt");
		input.classList.add("form-control");
		input.placeholder = "Añadir una lista ...";

		var boton =document.createElement("button");
		form.insertBefore(boton,form.childNodes[1]);
		boton.classList.add("btn-1");
		boton.classList.add("btn-success", "btn-block", "btn", "btn-sm");


		var botxt = document.createTextNode("Guardar");
		boton.appendChild(botxt);
		
		var icon = document.createElement("icon");
		form.insertBefore(icon,form.childNodes[2]);
		icon.classList.add("icon-cross");
		icon.classList.add("cross");
		
		
		boton.addEventListener("click", function(e){
		e.preventDefault();

		input.style.display = 'none';
		boton.style.display = 'none';
		icon.style.display = 'none';

		var contenido = input.value;
		var otraLista = document.createElement("div");
		otraLista.innerText = contenido;
		contenedor.insertBefore(otraLista,contenedor.childNodes[0]);

		var enlace = document.createElement("a")
		contenedor.insertBefore(enlace,contenedor.childNodes[1]);
		var atxt = document.createTextNode("Añadir una Tarjeta");
		enlace.appendChild(atxt);
		anidar();


		lista.style.display ='block'
		})
		}


	});

             
// window.addEventListener("load", function() {
// 	var button = document.getElementById("calcular");
// 	button.addEventListener("click", function() {
// 		var ingresoNumero = parseInt(document.getElementById("ingresoNumero").value);
// 		var ingresoCaracter = document.getElementById("ingresoCaracter").value;		
// 		numero(ingresoNumero,ingresoCaracter);

// 		});
// 	function numero(ingresoNumero, ingresoCaracter){
// 		var resultadoBox = [];
// 		for (var i = 0; i < ingresoNumero; i++){
// 			var resultado = [];
// 			for (var j = 0; j < ingresoNumero; j++){
// 			resultado.push(ingresoCaracter);
// 			}
// 			resultadoBox.push(resultado.join(" "));
//  		}
//  			document.getElementById("resultado").innerHTML = resultadoBox.join("<br>");
// 	}
// });

	