import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";

export default class Armazem {
    excluirClienteTitular(cliente: never) {
        throw new Error("Method not implemented.");
    }
    findByCpf(cpf: string) {
        return this.clientes.find(cliente => cpf == cliente.Documentos
            .find(documento => documento.Tipo == TipoDocumento.CPF)?.Numero)
    }
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }

    // Método para remover um cliente
    public removerCliente(clienteParaRemover: Cliente): void {
        this.clientes = this.clientes.filter(cliente => cliente !== clienteParaRemover);
    }



}