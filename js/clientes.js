function carregar() {
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = null
    const objJson = JSON.parse(localStorage.getItem("pessoas"))
    if (localStorage.hasOwnProperty("pessoas")) {

        objJson.forEach((pessoa, indice, array) => {
            const wraper = document.createElement("div")
            wraper.className = "clientes_single"
            wraper.id = indice
            resultado.appendChild(wraper)

            wraper.innerHTML = `
            <div class="foto"></div>
            <div class="conteudo_cliente">
                        <div class="nome">
                            <span class="negrito">Nome: </span>${pessoa.cliente.nome}</div>
                        <div class="endereco">
                            <span class="negrito">Endereço: </span>${pessoa.cliente.endereco}
                        </div>
                        <div class="aniversario"><span class="negrito">Data de aniversário: </span>${pessoa.cliente.aniversario}</div>
                        <div class="email"><span class="negrito">E-Mail: </span>${pessoa.cliente.email}</div>
                        <div class="telefone"><span class="negrito">Telefone: </span>${pessoa.cliente.telefone}</div>
                        <div><button class="btn btnEditar" id="btn${indice}">Editar</button></div>
                    </div>
            </div>`
            const btn = document.querySelector(`#btn${indice}`)
            btn.addEventListener("click", () => {
                botaoEditar(pessoa.cliente, array)
            })
        })
        const btnPesquisar = document.getElementById("verificarInfo")
        btnPesquisar.addEventListener("click", (e) => {
            e.preventDefault()
            pesquisar()
        })

    }
}
carregar()
const btnSair2 = document.querySelector("#sair2")
btnSair2.addEventListener("click", () => {
    location.href = "./index.html"
})
function pesquisar() {
    const objJson = JSON.parse(localStorage.getItem("pessoas"))
    const input = document.querySelector("#tipoInfo")
    const radio = document.getElementsByName("info")
    const final = document.querySelector("#resultado2")
    if (radio[0].checked == true) {
        pesquisaPor(objJson, input, "nome", final)
    } else if (radio[1].checked == true) {
        pesquisaPor(objJson, input, "aniversario", final)
    } else if (radio[2].checked == true) {
        pesquisaPor(objJson, input, "endereco", final)
    } else if (radio[3].checked == true) {
        pesquisaPor(objJson, input, "email", final)
    } else {
        pesquisaPor(objJson, input, "telefone", final)
    }
}
function pesquisaPor(obj, input, tipo, resposta) {
    const newArray = []
    resposta.innerHTML = ""
    obj.forEach((el, i, array) => {
        if (el.cliente[tipo].indexOf(input.value) > -1) {
            newArray.push(el)
            const wraperPesquisa = document.createElement("div")
            wraperPesquisa.className = "resultado_pesquisa_single"
            const imgUserPesquisa = document.createElement("div")
            const conteudoClientePesquisa = document.createElement("div")
            conteudoClientePesquisa.className = "conteudo_clientePesquisa"
            imgUserPesquisa.className = "fotoPesquisa"
            resposta.appendChild(wraperPesquisa)
            wraperPesquisa.appendChild(imgUserPesquisa)
            wraperPesquisa.appendChild(conteudoClientePesquisa)
            const elemento = Object.entries(el.cliente)
            elemento.forEach((element, i, array) => {
                String.prototype.capitalize = function () {
                    return this.charAt(0).toUpperCase() + this.substr(1);
                }
                const atributo = element[0].capitalize()
                conteudoClientePesquisa.innerHTML += `<div class="${element[0]}">
                        <span class="negrito">${atributo}: </span>${element[1]}
                    </div>`
            })
            /*const btnEditarPesquisa = document.createElement("div")
            wraperPesquisa.appendChild(btnEditarPesquisa)
            btnEditarPesquisa.className = "btnEditarPesquisa"
            const btn = document.createElement("button")
            btn.className = "btn"
            btn.id = `btn${i}`
            btn.innerHTML = "Editar"
            btn.addEventListener("click", botaoEditar)
            btnEditarPesquisa.appendChild(btn)*/
        }
    })

    if (newArray.length != 0) {
        alert(`Foram encontradas ${newArray.length} resultados semelhantes`)
    } else {
        alert("Nada encontrado!")
    }
}
function botaoEditar(obj, array) {
    alert(`Opções: \n- nome\n- endereco\n- aniversario\n- telefone\n- email`)
    const funcao = (metodo) => {
        let modificacao = prompt("Qual o novo valor?")
        var classe = criarInstanciaPessoa(obj)
        classe[metodo](modificacao)
        console.log(array)
        array[indice] = { cliente: classe }
        localStorage.setItem("pessoas", JSON.stringify(array))
        carregar()
    }
    let qualModificar = prompt("Qual propriedade você quer modificar?")
    if (qualModificar == "nome") {
        funcao('setNome')
    } else if (qualModificar == "endereco") {
        funcao('setEndereco')
    } else if (qualModificar == "aniversario") {
        funcao('setAniversario')
    } else if (qualModificar == "telefone") {
        funcao('setTel')
    } else if (qualModificar == "email") {
        funcao('setEmail')
    } else {
        alert("coloca algo valido ae")
    }
}