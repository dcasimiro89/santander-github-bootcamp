let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let StringTest: string = 'verificar'
StringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
//stringTest2 = unknownValor;

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}