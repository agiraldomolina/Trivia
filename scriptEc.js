const opcion1_1 = document.querySelector("#opcion1_1");
const opcion2_2 = document.querySelector("#opcion2_2");
const opcion3_2 = document.querySelector("#opcion3_2");
const opcion4_1 = document.querySelector("#opcion4_1");

const spanPreg1 = document.querySelector(".spanPreg1");
const spanPreg2 = document.querySelector(".spanPreg2");
const spanPreg3 = document.querySelector(".spanPreg3");
const spanPreg4 = document.querySelector(".spanPreg4");

const verResultados = document.querySelector(".verResultados");
//const revisar = document.querySelector(".revisar");

let strPregunta1 = "";
let strPregunta2 = "";
let strPregunta3 = "";
let strPregunta4 = "";

alert("Recuerda que sólo tienes 20 segundos para responder!");

function timer() {
  if (window.confirm("El tiempo se terminó, desea reintentar?")) {
    window.open("ecologia.html");
    let timerEc = setTimeout(timer, 10000);
  } else {
    window.close("ecologia.html"); //Cierra la ventana de preguntas
    window.focus("index.html"); // Hace visible la ventana de inicio
  }
}

let timerEc = setTimeout(timer, 10000);

verResultados.addEventListener("click", function () {
  opcion1_1.checked
    ? (strPregunta1 = "correcta🎉")
    : (strPregunta1 = "incorrecta ❌");
  spanPreg1.textContent = `Tu respuesta es ${strPregunta1}`;

  opcion2_2.checked
    ? (strPregunta2 = "correcta🎉")
    : (strPregunta2 = "incorrecta ❌");
  spanPreg2.textContent = `Tu respuesta es ${strPregunta2}`;

  opcion3_2.checked
    ? (strPregunta3 = "correcta🎉")
    : (strPregunta3 = "incorrecta ❌");
  spanPreg3.textContent = `Tu respuesta es ${strPregunta3}`;

  opcion4_1.checked
    ? (strPregunta4 = "correcta🎉")
    : (strPregunta4 = "incorrecta ❌");
  spanPreg4.textContent = `Tu respuesta es ${strPregunta4}`;

  if (
    opcion1_1.checked &&
    opcion2_2.checked &&
    opcion3_2.checked &&
    opcion4_1.checked
  ) {
    clearTimeout(timerEc);
  }
});
