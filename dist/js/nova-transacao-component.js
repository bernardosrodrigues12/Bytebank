const transacaoFormulario = document.querySelector(".block-nova-transacao form");
transacaoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!transacaoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = transacaoFormulario.querySelector("#tipoTransacao");
    const inputValor = transacaoFormulario.querySelector("#valor");
    const inputData = transacaoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de Transação é inválido");
        return;
    }
    elementoDoSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    transacaoFormulario.reset();
});
