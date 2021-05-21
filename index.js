const fs = require("fs")
const cofre = require('./cofrinho')

class Pessoa {
    constructor(nome, idade, dinheiro = 0) {
        this.nome = nome
        this.idade = idade
        this.dinheiro = dinheiro
    }
    getNome = () => {
        return this.nome
    }
    getIdade = () => {
        return this.idade
    }
    setNome = (novoNome) => {
        this.nome = novoNome
    }
    setIdade = () => {
        this.idade++
    }
    getBolso = () => {
        return this.dinheiro
    }
    receberSalario = (valor) => {
        this.dinheiro += valor
    }
    irShopping = (valor) => {
        if (valor < this.dinheiro) {
            this.bolso = this.bolso - valor
            return true
        } else {
            return false
        }
    }
}

const obj1 = new Pessoa("Fogo", 15, 1500)
console.log(obj1.getNome(), obj1.getBolso(), obj1.getIdade())