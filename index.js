const participante = {
    nome: "Participante",
    participantesQuantidade: 100,
    idade: 18
};
if (participante.participantesQuantidade < 100){
    console.log("Voce será direcionado para a proxima pagima")
}else {
    console.log("ESGOTADO AS INSCRIÇÕES")
}

var dataAtual = new Date('01-12-2021');
var dataEvento = new Date('01-11-2021');

if (dataEvento < dataAtual){
    console.log ("Data inválida, a inscrição não pode ser depois da data do evento !!!")
}else{
    console.log ("Voce sera direcionada para o cadastro")
}

if (participante.idade >= 18) {
       console.log (`${participante.nome} INSCREVA-SE`);
       console.log (`${participante.nome} Cadastro realizado com sucesso`)
}else {
       console.log ( "SOMENTE PARA MAIORES DE 18 ANOS"); 
}

const listarParticipantes =["Lista dos Participantes"];
const palestrantePorEvento =["Palestrante por evento"];

let indice = 0;
while (indice < listarParticipantes.length) {
    console.log(listarParticipantes[indice]);
    indice++;
}
for(let evento of palestrantePorEvento){
    console.log(evento);
}