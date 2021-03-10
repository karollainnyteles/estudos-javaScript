// var nome="Karollainny Teles";
// var idade=21;
// var idade2=2;
// frase="Japão é a melhor seleção do mundo";
//replace troca o primeiro pelo segundo na frase
//console.log(frase.replace("Japão","Brasil"));
// alert(nome+" tem "+idade+" anos");
// console.log(idade+idade2);
// console.log(nome);
// console.log(frase.toUpperCase());

//var lista=["maçã","pêra","uva"];
//console.log(lista.length);
//push add e pop retira o uúltimo elemento da lista
//lista.push("acerola");
//console.log(lista);
//lista.pop();
//console.log(lista);
//console.log(lista.reverse());
//to string transforma em string e separa por vírgulas
//console.log(lista.toString());
//no join tem que escolher o separador, se colocar vazio não terá separação
//console.log(lista.join(" * "));
//isso é um dicionário ou objeto
//var fruta={nome:"maçã",cor:"vermelho"};
//console.log(fruta);
// prompt faz uma pergunta pro usuario e guarda a resposta na variavel
// var idade=prompt("Qual sua idade");
// if(idade>=18){
//     alert("Maior de idade");
// }else{
//     alert("menor de idade");
// }
// var d= new Date();
// alert(d);
// alert(d.getDay());
// alert(d.getDate());

// function soma(n1, n2){
//     return n1+n2;
// }

// alert(soma(5,10));
function botao(){
   // alert("Obrigada por clicar");
   document.getElementById("agradecimento").innerHTML="<b>obrigada por clicar</b>";
   console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/karollainny-t-b72857100/");
   // window.location.href="https://www.linkedin.com/in/karollainny-t-b72857100/";
}

function trocar(elemento){
    //document.getElementById("mouseMove").innerHTML="obrigada por passar o mouse";
    elemento.innerHTML="obrigada por passar o mouse";
}

function voltar(elemento){
   // document.getElementById("mouseMove").innerHTML="passe o mouse aqui";
   elemento.innerHTML="passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}