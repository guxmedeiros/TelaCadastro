const formulario = document.querySelector("form");
const botaoCancelar = document.querySelector(".botao-cancelar");

function pegarValoresDoForm(event) {
  event.preventDefault();
  const listaDeVaInputs = Array.from(event.target);
  const listaDeValores = listaDeVaInputs.map(function (valorAtual) {
    return valorAtual.value;
  });
  console.log(listaDeValores);
}

function voltarPaginaLogin() {
  window.location.replace("/");
}

function salvar(event) {
  event.preventDefault();
  pegarValoresDoForm();
}

botaoCancelar.addEventListener("click", voltarPaginaLogin);
formulario.addEventListener("submit", pegarValoresDoForm);