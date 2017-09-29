	// Escutador de evento (addEventListener) e (event.preventDefault) que permite segurar um evento padrão do html, ele segura o valor quando o botão é clicado mantendo os valores e não apagando.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
event.preventDefault();

	// Pegando os dados do form. form que é a tag, (nome, altura etc) que é o name da tag input e .value que pega o valor digitando nesses input's.	
var form = document.querySelector("#form-adiciona");

var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;

	// Criando um tr com CreateElement (cria o elemento que quiser)	
var pacienteTr = document.createElement("tr");

	// Criando um td com CreateElement	
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

	// Preenchedo as td's com valores dos dados que entram no form	
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso,altura);


	// Colocando os td's dentro do tr usando appendChild
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

	
	// Colocando o tr criado acima dentro do tbody que é a tag onde está tabela. 
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
	
});



