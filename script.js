const clientes = [
    { nome: "João Cardoso Freitas", email: "joaofreitas@gmail.com", senha: "1234", telefone: "(19)91234-5678", data_da_compra: "12/03/2021", id: 0 },
    { nome: "Maria Eduarda Gomes", email: "mariagomes@hotmail.com", senha: "4321", telefone: "(19)97654-1234", data_da_compra: "21/02/2021", id: 1 },
    { nome: "Paulo Roberto Silva", email: "pauloroberto@outlook.com", senha: "0864", telefone: "(19)91324-5476", data_da_compra: "01/04/2021", id: 2 },
    { nome: "Cláudia Oliveira Cardoso", email: "claudiacardoso@hotmail.com", senha: "1324", telefone: "(19)90785-9587", data_da_compra: "15/12/2020", id: 3 },
    { nome: "José Henrique dos Santos", email: "josehenrique@outlook.com", senha: "5674", telefone: "(19)91846-1123", data_da_compra: "31/01/2020", id: 4 },
    { nome: "Bruna Moraes Silva", email: "brunamoraes@gmail.com", senha: "9605", telefone: "(19)93302-9365", data_da_compra: "01/01/2021", id: 5 },
    { nome: "Lucas Pedroso Cruz", email: "lucascruz@hotmail.com", senha: "2843", telefone: "(19)91946-1532", data_da_compra: "28/02/2020", id: 6 },
    { nome: "Vitória Marques dos Santos", email: "vitoriasantos@outlook.com", senha: "0192", telefone: "(19)90583-8473", data_da_compra: "27/06/2020", id: 7 },
    { nome: "Rodrigo Oliveira Silva", email: "rodrigoliveira@gmail.com", senha: "3846", telefone: "(19)91047-5565", data_da_compra: "30/09/2020", id: 8 },
    { nome: "Marcela Balieiro Mendes", email: "marcelamendes@hotmail.com", senha: "6978", telefone: "(19)98892-2235", data_da_compra: "22/01/2021", id: 9 }
]

let newIndice = 0

const input1 = document.getElementById("codigocompra");
const input2 = document.getElementById("senha");
const btn = document.getElementById("btn1");

const resultado = document.getElementById("dados")
btn.addEventListener("click", entregarValores)

function entregarValores() {
    clientes.forEach((element, indice) => {
        if (element.id == parseInt(input1.value)) {
            if (element.senha == parseInt(input2.value)) {
                newIndice = indice
                const elementos = Object.entries(clientes[newIndice])
                elementos.forEach((element, indice) => {
                    let elementoNome = element[0].charAt(0).toUpperCase() + element[0].substr(1)
                    resultado.innerHTML += `<div><span style="font-weight: bold">${elementoNome}: </span>${element[1]}</div>`
                })
            } else {
                alert("Senha Invalida")
                resultado.innerHTML = ""
            }
        }
    })
}