var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

	// Para selecionar todas as class ou ID's usa-se document.querySelectorAll.
	// Se for uma de cada vez usa-se document.querySelector.
var pacientes = document.querySelectorAll(".paciente");


	// length para saber o array(ordem, sequência, quantidade).
for (i = 0; i < pacientes.length; i++){
	
	var paciente = pacientes[i];	
	
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEValido = true;
	var alturaEValida = true;

	if (peso <= 0 || peso >= 1000) {
		console.log("Peso inválido!");
		pesoEValido = false;
		tdImc.textContent = "Peso Inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 3.00) {
		console.log("Altura Inválida");
		alturaEValida = false;
		tdImc.textContent = "Altura Inválida";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoEValido && alturaEValida) {
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc;
	}
}

function calculaImc(peso,altura){
	var imc = 0
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}


	