describe("Cálculos Básicos", function(){
    var resultado;
    beforeEach(function(){
        resultado = new Calculo(5,2);
    });

    describe("Operação Somar", function(){
        it("Soma",function(){
            expect(resultado.soma()).toEqual(7);
        });
    });

    describe("Operação Subtrair", function(){
        it("Subtração",function(){
            expect(resultado.subtracao()).toEqual(3);
        });
    });

    describe("Operação Dividir", function(){
        it("Divisão",function(){
            expect(resultado.divisao()).toEqual(2.5);
        });
    });

    describe("Operação Multiplicar", function(){
        it("Multiplicação",function(){
            expect(resultado.multiplicacao()).toEqual(10);
        });
    });
});