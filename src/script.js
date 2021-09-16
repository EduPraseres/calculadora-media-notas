const resultado = document.getElementById("resultado");

let mediaCalculada;

function calcularMedia() {
  let input11 = document.getElementById("nota1");
  let input22 = document.getElementById("nota2");
  let input33 = document.getElementById("nota3");
  let input44 = document.getElementById("nota4");

  let input1 = parseFloat(input11.value) || 0;
  let input2 = parseFloat(input22.value) || 0;
  let input3 = parseFloat(input33.value) || 0;
  let input4 = parseFloat(input44.value) || 0;

  if (
    (input1, input2, input3, input4 > 10 || input1, input2, input3, input4 < 0)
  ) {
    resultado.innerHTML =
      "Uma ou mais entradas inválidas! Ambas devem estar entre 0-10.";
  } else {
    mediaCalculada = 0;
    mediaCalculada = (input1 + input2 + input3 + input4) / 4;
    if (mediaCalculada >= 5) {
      resultado.innerHTML =
        "Aprovado - Sua média final é: " + mediaCalculada.toFixed(1);
    } else {
      resultado.innerHTML =
        "Reprovado - Sua média final é: " + mediaCalculada.toFixed(1);
    }
  }
}
