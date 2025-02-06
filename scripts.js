// scripts.js
document.getElementById('compraForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const cashback = valorCompra * 0.05; // 5% de cashback
    document.getElementById('cashbackInfo').textContent = `Você acumulou R$ ${cashback.toFixed(2)} de cashback!`;
});

document.getElementById('utilizarForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const cashback = valorCompra - 5.00; // R$5,00 de cashback
    document.getElementById('cashbackInfo').textContent = `Desconto com a utilização do cashback R$ 5,00`;
    document.getElementById('cashbackInfo2').textContent = `Você pagou R$ ${cashback.toFixed(2)}`;

});

document.getElementById('resgatarBtn').addEventListener('click', function () {
    const saldo = 50.00; // Exemplo de saldo
    alert(`Cashback de R$ ${saldo.toFixed(2)} resgatado com sucesso!`);
    document.getElementById('resgateInfo').textContent = `Cashback resgatado: R$ ${saldo.toFixed(2)}`;
});