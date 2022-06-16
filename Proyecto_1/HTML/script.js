/*Función del nombre*/

let total = 0;
let correctAnswers = {
  "pregunta_1": "No los entierran.",
  "pregunta_2": "Puerta de la derecha.",
  "pregunta_3": "Cinco.",
  "pregunta_4": "Francia.",
  "pregunta_5": "Amazonas.",
  "pregunta_6": "Japon."
}


function getName() {
    var uname = document.getElementById("uname").value;
    var saludo = document.getElementById("saludo")
        saludo.innerHTML = `¡Hola ${uname}!`
  
    console.log(`tu nombre es ${uname}`)
  
    document.getElementById("page_1").style.display = "none";
    document.getElementById("page_2").style.display = "block";
}

function pasarPagina(apagar, prender){
    document.getElementById(apagar).style.display = "none";
    document.getElementById(prender).style.display = "block";
}
/*Validación respuestas */

function verRespuestas(preguntas) {
    for (element of preguntas){
        let respuesta = document.querySelector(`input[name="${element}"]:checked`).value
        if (respuesta == correctAnswers[element]){
          total += 1
        }
    }
    alert("respuestas correctas: " + total);










/*Trivia acertijo*/

// function trivia_acertijos() {
//     document.getElementById("page_2").style.display = "none";
//     document.getElementById("page_3").style.display = "block";
// }

// function Siguiente() {
//     document.getElementById("page_3").style.display = "none";
//     document.getElementById("page_4").style.display = "block";
// }
// function Siguiente_2() {
//     document.getElementById("page_4").style.display = "none";
//     document.getElementById("page_5").style.display = "block";
// }
// function Siguiente_3() {
//     document.getElementById("page_5").style.display = "none";
//     document.getElementById("page_9").style.display = "block";
// }

/*Trivia viajeros*/

// function trivia_viajeros() {
//     document.getElementById("page_2").style.display = "none";
//     document.getElementById("page_6").style.display = "block";
// }
// function Siguiente_4() {
//     document.getElementById("page_6").style.display = "none";
//     document.getElementById("page_7").style.display = "block";
// }
// function Siguiente_5() {
//     document.getElementById("page_7").style.display = "none";
//     document.getElementById("page_8").style.display = "block";
// }
// function Siguiente_6() {
//     document.getElementById("page_8").style.display = "none";
//     document.getElementById("page_10").style.display = "block";
// }