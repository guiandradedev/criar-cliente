class Cofrinho {
    constructor(saldo, dinheiro, id) {
        this.saldo = saldo
        this.dinheiro = dinheiro
    }
    getSaldo = () => {
        return this.saldo
    }
    setSaldo = (valor) => {
        this.saldo = this.dinheiro + valor
    }
}
module.exports = {
    Cofrinho
}