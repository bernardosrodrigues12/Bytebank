let saldo = 3000;

const elementoDoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoDoSaldo != null) {
    elementoDoSaldo.textContent = saldo.toString();
};  