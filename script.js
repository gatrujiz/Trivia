/*Función del nombre*/

let total = 0;
let correctAnswers = {
  "pregunta_1": "No los entierran.",
  "pregunta_2": "Puerta de la derecha.",
  "pregunta_3": "Cinco.",
  "pregunta_4": "Francia.",
  "pregunta_5": "Amazonas.",
  "pregunta_6": "Japón.",
}


function getName() {
    var uname = document.getElementById("uname").value;
    var saludo = document.getElementById("saludo");
        saludo.innerHTML = `¡Hola ${uname}!`;
  
    console.log(`tu nombre es ${uname}`);
  
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
        if (respuesta == correctAnswers[element]){;
          total += 1;
        }
    }
    alert("Respuestas correctas: " + total);
  total = 0;
}








