const valorConta = 120
const percentualGorjeta = 10

if(typeof valorConta !== "number" || valorConta <= 0) {
    console.log("ERRO: o valor da conta deve ser um número maior que zero.");
}else{
    const valorGorjeta = valorConta * (percentualGorjeta/100);

    const totalPagar = valorConta + valorGorjeta;


    console.log(`Valor da Conta: R$${valorConta.toFixed(2)}`);
    console.log(`Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}`);
    console.log(`Total a pagar: R$${totalPagar.toFixed(2)}`);
}