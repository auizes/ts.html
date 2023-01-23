//declarando variaves no ts

let nome: string = "Fulano"
let idade: number = 27
let altura: number = 1.82
let temGato: boolean = false

//criando ARRAYS
let nomes: string[] = ['eu','outro eu', 'mais eu']
// fazer array de numeros
let numeros: number[] = [10,100,120,130]
//array misturando
let coisas:any = ['Fulano',15,'ciclano',20]

//funções no TS
function firstLetterUpperCase  (nome: string, age: number){
    let firstLetter = nome.toUpperCase()
    return firstLetter+nome
}




