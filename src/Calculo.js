class Calculo{
    constructor(num1, num2){
        this._numero1 = num1;
        this._numero2 = num2;
    }

    soma(){
        return this._numero1 + this._numero2;
    }
    subtracao(){
        return this._numero1 - this._numero2;
    }
    divisao(){
        return this._numero1 / this._numero2;
    }
    multiplicacao(){
        return this._numero1 * this._numero2;
    }
}