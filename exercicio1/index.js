/*1. Crie quatro funções (somar, subtrair, dividir e multiplicar). Em seguida faça uma função chamada calcular(),
 essa função deve receber 3 parâmetros, valor A, valor B e a função callback que será executada.*/

 import PromptSync from "prompt-sync"

 const prompt = PromptSync()

 const a = Number(prompt())
 const b = Number(prompt())

 function Somar(a,b){
    return a+b
}

 function Subtrair(a,b){
    return a-b
}

 function Dividir(a,b){
    return a/b
 }

 function Multiplicar(a,b){
    return a*b
 }

 function Calcular(a,b,callback){
    return callback(a,b)
 }

 console.log(`Soma: ${Calcular(a,b,Somar)}`)
 console.log(`Subtração: ${ Calcular(a,b,Subtrair)}`)
 console.log(`Divisão: ${Calcular(a,b,Dividir)}`)
 console.log(`Multiplicação: ${Calcular(a,b,Multiplicar)}`)

 
 