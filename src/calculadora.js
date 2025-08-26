// Função simples para testar soma
export function somar(a, b) {
    return a + b
}

// Função simples para testar subtração
export function subtrair(a, b) {
    return a - b
}

// Função simples para testar multiplicação
export function multiplicar(a, b) {
    return a * b
}

// Função simples para testar divisão
export function dividir(a, b) {
    if(b == 0) {
        throw new Error("Não é possível dividir por zero")
    } else {
        return a / b
    }
}

// Função simples para verificar se o número é par
export function ehPar(a) {
    if(a % 2 == 0) {
        return "É par"
    } else {
        return "É ímpar"
    }
}