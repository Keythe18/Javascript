const boutNumero = document.querySelectorAll('[numero]');
const boutOp = document.documentElement.op;
const boutEgal = document.documentElement.egal;
const boutClear = document.documentElement.clear;

/*const num = document.querySelectorAll('.numero');
num.forEach( element => {
  element.addEventListener('click', myFunction);
})

function myFunction(display) {
  const value = display.target.value;
  document.getElementById("affichage").innerHTML = value;
}*/

function displayFunction() {
    var x = "";
    x = document.getElementById("numero").value;
    var inputVal = "";
    if (x)
        inputVal = x.value;
    document.getElementById("affichage").innerHTML = x;
}
