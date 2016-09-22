
window.addEventListener("load", function() {
		var contenedor = document.getElementById("contenedor");
		var lista = document.getElementById("lista");
		var form =document.createElement("form");
		var input =document.createElement("input");
		var boton =document.createElement("button");
		var botxt = document.createTextNode("Guardar");
		var icon = document.createElement("icon");

		lista.addEventListener("click", function() {
		lista.style.display = 'none';
		contenedor.insertBefore(form,contenedor.childNodes[0]);
		form.insertBefore(input,form.childNodes[0]);
		form.insertBefore(boton,form.childNodes[1]);
		boton.appendChild(botxt);
		form.insertBefore(boton,form.childNodes[2]);
		icon.classList.add("icon-cross");
		});
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

	