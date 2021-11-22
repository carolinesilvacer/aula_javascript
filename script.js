// var nome = "Carol Silva";
// var n1 = 5;
// var n2 = 3;

// var frase= "Japão é o melhor time do mundo";

// //concatenar é só adicionar o +
// // alert(nome + " tem "+ idade +" anos");
// // alert (idade + idade2);

// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.replace("Japão","Brasil"));
// // alert(frase.replace("Japão", "Brasil"));

// var lista = ["maçã", "pera", "laranja"];
// // lista.push("");
// // lista.pop();
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" "));

// var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxo"}, {nome: "laranja", cor: "laranja"}];
// console.log(frutas[0].nome);

// var fruta = {nome: "maçã", cor: "vermelha"}
// console.log(fruta.nome);

// var idade = prompt("Qual sua idade?");
// if (idade >= 18) {
//     alert("maior de idade");
// } else {
//     alert("menor de idade");
// };

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     alert(count);
//     count++;
// }

// var count;
// for(count 1; count <= 5; count ++){
// alert(count);
// };

// var d =  new Date();
// alert(d.getHours());

// function soma(n1, n2){
// return n1 + n2;
// }

// var validar = 0;
// function validaIdade(idade){
//     validar;
//     if (idade >= 18){
//         validar = true
//     } else {
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?");
// validaIdade(idade);
// console.log(validar);

// alert(soma(5, 10));


function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar!");

}

function redirecionar () {
    window.open("https://www.youtube.com/watch?v=ApbWUXiY990");
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse!";
    // document.getElementById ("mousemove").innerHTML = "Obrigado por passar o mouse!";
    // alert("Trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o Mouse aqui!";
    // document.getElementById ("mousemove").innerHTML = "Passe o mouse aqui";  
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}