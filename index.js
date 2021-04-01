const readline = require('readline-sync')

const nomeAluno = readline.question('Nome de aluno ')

const primeiraNota = parseFloat(readline.question('Nota 1 '))
const segundaNota = parseFloat(readline.question('Nota 2 '))
const terceiraNota = parseFloat(readline.question('Nota 3 '))
const quartaNota = parseFloat(readline.question('Nota 4 '))
const quintaNota = parseFloat(readline.question('Nota 5 '))


const media = (primeiraNota + segundaNota + terceiraNota 
+ quartaNota + quintaNota)/5
console.log(media)

if(media >= 7){
console.log(nomeAluno + " está aprovado(a)")
}else if (media < 5){
console.log(nomeAluno + " está reprovado(a)")
}else if (media >= 5 && media < 7){
console.log(nomeAluno + " foi pra recuperação")
}