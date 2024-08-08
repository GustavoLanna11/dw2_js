/*Exercício 1 - Crie uma função simples que exiba no console seu nome, sua idade e sua cidade. (Não esqueça de invocar a função no final).*/

const nome = "Gustavo"
var idade = 18
const cidade = "Jacupiranga"

function meusDados() {
    console.log(`Seu nome é ${nome}, sua idade é ${idade} e sua cidade é ${cidade}`)
}
meusDados()

/*Exercício 2 - Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”). A função deve ser chamada ao final passando dois números como argumento.*/

function divisao(n1, n2) {
    let resultado = n1 / n2
    console.log(`O resultado da divisão foi: ${resultado}`)
}
divisao(10, 5)

/*Exercício 3 – Crie uma função que receba três números e retorne a multiplicação entre esses números. O resultado deve ser exibido no console.*/

function mult(n1, n2, n3){
    return n1 * n2 * n3
}
console.log(`A multiplicação entre os 3 números foi ${mult(2,3,4)}`)

/*Exercício 4 -Crie uma função que receba uma idade como parâmetro. Se a idade for >= 18, a função deve retornar o valor “Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console.*/
function validar(idade) {
    if(idade >= 18){
        return 'Maior de idade'
    } else if (idade <= 18){
        return 'Impar'
    }
}
var idade = 18
console.log(`${validar(idade)}`)