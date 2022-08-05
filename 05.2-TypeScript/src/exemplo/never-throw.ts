function jogaErro(erro: string, codigo: number): never { // código que não será finalizado
    throw {
        error: erro,
        code: codigo
    }
}

jogaErro('deu erro', 500);