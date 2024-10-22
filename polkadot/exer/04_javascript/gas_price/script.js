function calcPrecoGas(complexidade) {
    switch (complexidade) {
        case "baixa":
            return 0.01;
        case "media":
            return 0.05
        case "alta":
            return 0.1
    }
}

function obterPrecoDotUsd() {
    return 4.31;
}

function obterPrecoDotBrl() {
    return 24.60;
}

function calcCustoGasMoeda(custoGas, moeda) {
    switch (moeda) {
        case "usd":
            return custoGas * obterPrecoDotUsd();
        case "brl":
            return custoGas * obterPrecoDotBrl();
    }
}

function salvarTransacao(transacao) {
    let transacoes = JSON.parse(localStorage.getItem("transacoes") || "[]");

    transacoes.unshift(transacao);
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
}

function exibirTransacoes() {
    const transacoes = document.getElementById("transacoes");
    const lstTransacoes = JSON.parse(localStorage.getItem("transacoes") || "[]");

    if (lstTransacoes.length > 0) {
        html = `
            <table>
                <thead>
                    <tr>
                        <th colspan="5">Últimas 5 transações</th>
                    </tr>
                    <tr>
                        <th>Data hora</th>
                        <th>Valor (DOT)</th>
                        <th>Complexidade</th>
                        <th>Custo gas (DOT)</th>
                        <th>Custo gas (Moeda)</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let transacao of lstTransacoes.slice(0, 5)) {
            html += `
                    <tr>
                        <td>${transacao.dataHora}</td>
                        <td>${transacao.valor}</td>
                        <td>${transacao.complexidade}</td>
                        <td>${transacao.custoGas}</td>
                        <td>${transacao.custoGasMoeda}</td>
                    </tr>
            `;
        }

        html += `
                </tbody>
            </table>
        `;

        transacoes.innerHTML = html;
    } else {
        transacoes.innerHTML = `
            <p>Sem transações.</p>
        `
    }
}

document.getElementById("calcular").addEventListener("click", () => {
    const valorTransacao = parseFloat(document.getElementById("valor-transacao").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(valorTransacao) || valorTransacao <= 0) {
        resultado.classList.remove("sucesso");

        resultado.innerHTML = `
            <p style="color: red";>Informe um valor maior do que zero.</p>
        `
        return;
    }

    const complexidade = document.getElementById("complexidade").value;
    const complexidadeTxt = document.querySelector(`#complexidade option[value="${complexidade}"]`).textContent;
    const moeda = document.getElementById("moeda").value;

    const custoGas = valorTransacao * calcPrecoGas(complexidade);
    const custoGasMoeda = calcCustoGasMoeda(custoGas, moeda);

    resultado.classList.add("sucesso")

    resultado.innerHTML = `
            <p>Valor da Transação: ${valorTransacao} DOT</p>
            <p>Complexidade: ${complexidadeTxt}</p>
            <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(5)} DOT ➙ ${custoGasMoeda.toFixed(2)} ${moeda.toLocaleUpperCase()}</strong></p>
        `;

    transacao = {
        dataHora: (new Date()).toISOString().split("T").join(" ").split(".").slice(0, 1).join(""),
        valor: valorTransacao.toFixed(5),
        complexidade: complexidadeTxt,
        custoGas: `${custoGas.toFixed(5)} DOT`,
        custoGasMoeda: `${custoGasMoeda.toFixed(2)} ${moeda.toLocaleUpperCase()}`,
    }

    salvarTransacao(transacao);
    exibirTransacoes();
});

exibirTransacoes();
