const btnJugar = document.querySelector(".btnJugar");
const textInputName = document.querySelector(".inputName");
const checkOpt1 = document.querySelector("#op1");
const checkOpt2 = document.querySelector("#op2");
const checkTema = document.querySelector("opt");
const sub = document.querySelector("submit");

let nombre = "";
let tema = "";

// externalWindow = window.open("ecologia", "_blank");
// messageWindow = window.open(
//   "timeOver.html",
//   "_blank",
//   "width=600,height=200,top=200,left=300"
// );

/*
function timerEc() {
  alert("tiempo se terminó");
  window.focus("index.html");
  window.blur("ecologia.html");
}

*/

btnJugar.addEventListener("click", function () {
  nombre = textInputName.value;
  console.log(nombre);
  checkOpt1.checked ? (tema = checkOpt1.value) : (tema = checkOpt2.value);
  //tema = checkTema//tema = checkOpt1.value;
  console.log(tema);
  alert(`Bienvenida ${nombre} escogiste el tema ${tema}`);
  tema == "ecologia"
    ? window.open("ecologia.html")
    : window.open("equidad.html");
});
