import { somar, subtrair, multiplicar, dividir, ehPar } from "../src/calculadora.js"

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 2
        const b = 3
        // Act (Executar)
        const resultado = somar(a, b)
        // Assert (Verificar)
        expect(resultado).toBe(5)
    }),
        test("Deve subtrair dois números corretamente", () => {
            const a = 2
            const b = 3
            const resultado = subtrair(a, b)
            expect(resultado).toBe(-1)
        }),
        test("Deve multiplicar dois números corretamente", () => {
            const a = 2
            const b = 3
            const resultado = multiplicar(a, b)
            expect(resultado).toBe(6)
        }),
        test("Deve dividir dois números corretamente", () => {
            const a = 3
            const b = 3
            const resultado = dividir(a, b)
            expect(resultado).toBe(1)
        }),
        test("Deve lançar erro ao dividir por 0", () => {
            expect(() => {dividir(10, 0)}).toThrow("Não é possível dividir por zero")
        }),
        test("Deve verificar se o número é par", () => {
            const a = 2
            const resultado = ehPar(a)
            expect(resultado).toBe("É par")
        })
})