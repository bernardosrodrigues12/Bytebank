const transacaoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
transacaoFormulario.addEventListener("submit", function(event){
    event.preventDefault();
    if (!transacaoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return; 
    }

    const inputTipoTransacao = transacaoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = transacaoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = transacaoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == "Depósito") { 
        saldo += valor;
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert("Tipo de Transação é inválido");
        return
    }

    elementoDoSaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao)
    transacaoFormulario.reset();
});
