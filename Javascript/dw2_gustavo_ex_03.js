/* 1 – Crie uma função que a partir da data atual, exiba no console uma nova data da seguinte forma: */

function fData(dataAtual) {
    const dia = dataAtual.getDate();
    const mês = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();

    console.log(`A data atual, 6 anos, 4 meses e 3 dias a mais é igual a: ${dia+3}/${mês+4}/${ano+6}`);
}
fData( new Date());


/*2 – Crie uma função que receba um determinado salário em real como parâmetro e converta esse salário para as moedas Dólar e Euro. Deverá ser feito a conversão de valores e formatação da moeda. */
function Salario(salario){
    const salarioDolar = salario * 0.20;
    const salarioEuro = salario * 0.19;

      console.log(`Seu salário em reais é: ${salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`);
      console.log(`Seu salário em dólares é: ${salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })}`);
      console.log(`Seu salário em euro é: ${salarioEuro.toLocaleString("eur", { style: "currency", currency: "EUR" })}`);
}
Salario(700);



/* 3 – Crie uma função que receba um nome como parâmetro e exiba no console este nome formatado somente com letras maiúsculas, somente com letras minúsculas, e em seguida exiba o número de letras que esse nome possui. */
function Nome (nome) {
    console.log(`Seu nome em maíusculo: ${nome.toUpperCase()}`);
    console.log(`A quantidade de letras do seu nome é: ${nome.length}`);
}
Nome("Gustavo Lanna");