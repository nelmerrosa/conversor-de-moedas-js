function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorConvertidoPraReal = valorEmDolar * 5.6;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Resultado em Real é R$:" + valorConvertidoPraReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  var ResBTC = document.getElementById("valorBTC");
  var valorBTCoin =
    "O valor em BitCoins seria: " + 250.656 / valorConvertidoPraReal;
  ResBTC.innerHTML = valorBTCoin;
}
