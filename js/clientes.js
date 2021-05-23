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
                        <div><button class="btn btnEditar" id="b${indice}">Editar</button></div>
                    </div>
            </div>`
            const btn = document.getElementById(`b${indice}`)
            btn.addEventListener("click", function openModal() {
                document.getElementById("modal").style.top = "0"
                const btnSemLetras = btn.id.substr(1)
                if (btnSemLetras == indice) { atribuirForm() }
            })
            function atribuirForm() {
                const nome = document.querySelector("#nomeEdit")
                const aniv = document.querySelector("#anivEdit")
                const end = document.querySelector("#endEdit")
                const email = document.querySelector("#emailEdit")
                const tel = document.querySelector("#telEdit")

                nome.value = pessoa.cliente.nome
                aniv.value = pessoa.cliente.aniversario
                end.value = pessoa.cliente.endereco
                email.value = pessoa.cliente.email
                tel.value = pessoa.cliente.telefone
                if (nome.value != "", aniv.value != "", end.value != "", email.value != "", tel.value != "") {
                    const btnEnviar = document.querySelector("#enviarEdit")
                    btnEnviar.addEventListener("click", () => {
                        funcao('setNome', 'setAniversario', 'setEndereco', 'setEmail', 'setTel', nome.value, aniv.value, end.value, email.value, tel.value)
                        carregar()
                        //pesquisar()//verificar isso depois, tentar botar um callback nisso!
                        setTimeout(() => {
                            document.getElementById("modal").style.top = "-200%"
                        }, 1000);
                    })
                } else {
                    alert("Todos os campos devem estar completos!")
                }
            }


            const funcao = (metodo1, metodo2, metodo3, metodo4, metodo5, valor1, valor2, valor3, valor4, valor5) => {
                var classe = criarInstanciaPessoa(pessoa.cliente)
                classe[metodo1](valor1)
                classe[metodo2](valor2)
                classe[metodo3](valor3)
                classe[metodo4](valor4)
                classe[metodo5](valor5)
                array[indice] = { cliente: classe }
                localStorage.setItem("pessoas", JSON.stringify(array))
            }

            /*
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
                }*/
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
    const final = document.querySelector("#resultado2")
    const pesquisaH2 = document.querySelector("#pesquisaPor")
    if (input.value != "") {
        pesquisaPor(objJson, input, final, pesquisaH2)
    } else {
        alert("Você precisa colocar algo válido!")
        pesquisaH2.innerHTML = "Pesquisar por:"
    }
}
function pesquisaPor(obj, input, resposta, h2) {
    const newArray = []
    resposta.innerHTML = ""
    h2.innerHTML = `Pesquisar por: <span class="negrito">${input.value}</span>`
    obj.forEach((element, indice) => {
        let elementosEntries = Object.entries(element.cliente)
        elementosEntries.forEach((el, i) => {
            if (el[1].indexOf(input.value) > -1) {
                if (!newArray.includes(element)) {
                    newArray.push(element)
                }
            }
        })
    })
    input.value = ""
    if (newArray.length != 0) {
        alert(`Foram encontradas ${newArray.length} resultados semelhantes`)
    } else {
        alert("Nada encontrado!")
        resposta.innerHTML = "<h2 id='nadaEncontrado'>Nada Encontrado!</h2>"
    }
    newArray.forEach((element, indice) => {
        const elementosEntries2 = Object.entries(element.cliente)
        const wraperPesquisa = document.createElement("div")
        wraperPesquisa.className = "resultado_pesquisa_single"
        const imgUserPesquisa = document.createElement("div")
        const conteudoClientePesquisa = document.createElement("div")
        conteudoClientePesquisa.className = "conteudo_clientePesquisa"
        imgUserPesquisa.className = "fotoPesquisa"
        resposta.appendChild(wraperPesquisa)
        wraperPesquisa.appendChild(imgUserPesquisa)
        wraperPesquisa.appendChild(conteudoClientePesquisa)
        elementosEntries2.forEach((el, ind) => {
            const atributo = el[0].capitalize()
            conteudoClientePesquisa.innerHTML += `<div class="${el[0]}">
                    <span class="negrito">${atributo}: </span>${el[1]}
                </div>`})
    })
}
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
}
/*function openModal(obj, array) {
    document.getElementById("modal").style.top = "0"
    const nome = document.querySelector("#nomeEdit")
    const aniv = document.querySelector("#anivEdit")
    const end = document.querySelector("#endEdit")
    const email = document.querySelector("#emailEdit")
    const tel = document.querySelector("#telEdit")

    nome.value = obj.nome
    aniv.value = obj.aniversario
    end.value = obj.endereco
    email.value = obj.email
    tel.value = obj.telefone
    console.log(array)

    const btn = document.querySelector("#enviarEdit")
    btn.addEventListener("click", () => {
        if (nome.value != "", aniv.value != "", end.value != "", email.value != "", tel.value != "") {
            funcao('setNome', nome.value)
            funcao('setAniversario', aniv.value)
            funcao('setEndereco', end.value)
            funcao('setEmail', email.value)
            funcao('setTel', tel.value)
        } else {
            alert("Todos os campos devem estar completos!")
        }
    })


    const funcao = (metodo, modificacao) => {
        var classe = criarInstanciaPessoa(obj)
        classe[metodo](modificacao)
        array[indice] = { cliente: classe }
        localStorage.setItem("pessoas", JSON.stringify(array))
        carregar()
    }/*
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
}*/