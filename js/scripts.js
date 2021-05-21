const clientes = []
let indice = 0
const btn = document.querySelector("#enviar")
btn.addEventListener("click", e => {
    e.preventDefault()
    criarCliente()
})

const btnSair = document.querySelector("#sair")
btnSair.addEventListener("click", () => {
    location.href = "./clientes.html"
})

class Pessoa {
    constructor(nome, aniversario, endereco, email, telefone) {
        this.nome = nome
        this.aniversario = aniversario
        this.endereco = endereco
        this.email = email
        this.telefone = telefone
    }
    getNome = () => {
        return this.nome
    }
    getAniversario = () => {
        return this.aniversario
    }
    getEndereco = () => {
        return this.endereco
    }
    getEmail = () => {
        return this.email
    }
    getTelefone = () => {
        return this.telefone
    }
}

function criarCliente() {
    const nome = document.querySelector("#nome")
    const aniv = document.querySelector("#aniv")
    const end = document.querySelector("#end")
    const email = document.querySelector("#email")
    const tel = document.querySelector("#tel")
    clientes[indice] = new Pessoa(nome.value, aniv.value, end.value, email.value, tel.value)


    let pessoas = new Array()

    if (localStorage.hasOwnProperty("pessoas")) {
        pessoas = JSON.parse(localStorage.getItem("pessoas"))
    }
    pessoas.push({ cliente: clientes[indice] })
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    nome.value = " "
    aniv.value = " "
    end.value = " "
    email.value = " "
    tel.value = " "
    indice++
}