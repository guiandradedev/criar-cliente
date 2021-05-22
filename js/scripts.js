const clientes = []
let indice = 0
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
    setNome = (novoNome) => {
        this.nome = novoNome
    }
    setTel = (novoTel) => {
        this.telefone = novoTel
    }
    setAniversario = (novoAniv) => {
        this.aniversario = novoAniv
    }
    setEmail = (novoEmail) => {
        this.email = novoEmail
    }
    setEndereco = (novoEnd) => {
        this.endereco = novoEnd
    }
}

function criarCliente() {
    const nome = document.querySelector("#nome")
    const aniv = document.querySelector("#aniv")
    const end = document.querySelector("#end")
    const email = document.querySelector("#email")
    const tel = document.querySelector("#tel")
    if (nome.value != "", aniv.value != "", end.value != "", email.value != "", tel.value != "") {
        clientes[indice] = new Pessoa(nome.value, aniv.value, end.value, email.value, tel.value)

        let pessoas = new Array()

        if (localStorage.hasOwnProperty("pessoas")) {
            pessoas = JSON.parse(localStorage.getItem("pessoas"))
        }
        pessoas.push({ cliente: clientes[indice] })
        localStorage.setItem("pessoas", JSON.stringify(pessoas))
        nome.value = ""
        aniv.value = ""
        end.value = ""
        email.value = ""
        tel.value = ""
        indice++
        const teste = document.querySelector(".enviado")
        teste.style.display = "inline-block"
        setTimeout(() => {
            teste.style.display = "none"
        }, 3000);
    } else {
        alert("Coloque informações válidas!")
    }
}
function criarInstanciaPessoa(obj) {
    return new Pessoa(obj.nome, obj.aniversario, obj.endereco, obj.email, obj.telefone)
}