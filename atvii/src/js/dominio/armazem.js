"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TipoDocumento_1 = require("../enumeracoes/TipoDocumento");
class Armazem {
    excluirClienteTitular(cliente) {
        throw new Error("Method not implemented.");
    }
    findByCpf(cpf) {
        return this.clientes.find(cliente => {
            var _a;
            return cpf == ((_a = cliente.Documentos
                .find(documento => documento.Tipo == TipoDocumento_1.TipoDocumento.CPF)) === null || _a === void 0 ? void 0 : _a.Numero);
        });
    }
    constructor() {
        this.clientes = [];
    }
    static get InstanciaUnica() {
        return this.instanciaUnica;
    }
    get Clientes() {
        return this.clientes;
    }
    // Método para remover um cliente
    removerCliente(clienteParaRemover) {
        this.clientes = this.clientes.filter(cliente => cliente !== clienteParaRemover);
    }
}
Armazem.instanciaUnica = new Armazem();
exports.default = Armazem;
