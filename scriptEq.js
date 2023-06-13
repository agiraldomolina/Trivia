//Creamos nombres cortos asociados a los elementos de la interfaz
const opcion1_3 = document.querySelector("#opcion1_3");
const opcion2_2 = document.querySelector("#opcion2_2");
const opcion3_1 = document.querySelector("#opcion3_1");
const opcion4_3 = document.querySelector("#opcion4_3");

//nombres de variables para los botones de las opciones correctas
const spanPreg1 = document.querySelector(".spanPreg1");
const spanPreg2 = document.querySelector(".spanPreg2");
const spanPreg3 = document.querySelector(".spanPreg3");
const spanPreg4 = document.querySelector(".spanPreg4");

//Nombre de variable para el botón de resultados
const verResultados = document.querySelector(".verResultados");

//Declaramos variables de caracteres para las respuestas correctas de cada pregunta strPregunta*
let strPregunta1 = "";
let strPregunta2 = "";
let strPregunta3 = "";
let strPregunta4 = "";

//Mensaje de alerta advirtiendo del tiempo límite para responder las preguntas
alert("Recuerda que solo tienes 20 segundos para responder");

// función que se ejecutará cuando finalice el tiempo del timer
/*
function timer() {
  alert("El tiempo se terminó");
  window.focus("index.html");    // Hace visible la ventana de inicio 
  window.close("equidad.html");  //Cierra la ventana de preguntas
};

*/

function timer() {
  if (window.confirm("El tiempo se terminó, desea reintentar?")) {
    window.close("equidad.html");
    window.open("equidad.html");
    let timerEq = setTimeout(timer, 10000);
  } else {
    window.close("equidad.html"); //Cierra la ventana de preguntas
    window.focus("index.html"); // Hace visible la ventana de inicio
  }
}

let timerEq = setTimeout(timer, 10000); // Inicia el timer

//Código que se ejecuta cuando se hace click sobre el botón de resultados
verResultados.addEventListener("click", function () {
  //cada condicional verifica que esté clickeada la opión correcta
  // Si la respuesta es verdadera cada strPregunta* toma el valor de "correcta 🎉"
  // Si la respuesta es incorrecta cada strPregunta* toma el valor de "incorrecta ❌"

  opcion1_3.checked
    ? (strPregunta1 = "correcta🎉")
    : (strPregunta1 = "incorrecta ❌");
  spanPreg1.textContent = `Tu respuesta es ${strPregunta1}`;

  opcion2_2.checked
    ? (strPregunta2 = "correcta🎉")
    : (strPregunta2 = "incorrecta ❌");
  spanPreg2.textContent = `Tu respuesta es ${strPregunta2}`;

  opcion3_1.checked
    ? (strPregunta3 = "correcta🎉")
    : (strPregunta3 = "incorrecta ❌");
  spanPreg3.textContent = `Tu respuesta es ${strPregunta3}`;

  opcion4_3.checked
    ? (strPregunta4 = "correcta🎉")
    : (strPregunta4 = "incorrecta ❌");
  spanPreg4.textContent = `Tu respuesta es ${strPregunta4}`;

  //este último condicional desactiva el timer solo cuando todas las respuestas son correctas

  if (
    opcion1_3.checked &&
    opcion2_2.checked &&
    opcion3_1.checked &&
    opcion4_3.checked
  ) {
    clearTimeout(timerEq);
  }
});
