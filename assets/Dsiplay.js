class Display{
    constructor(displayValorAnterior, dsiplayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.dsiplayValorActual = dsiplayValorActual
        this.calculadora = new Calculator();
        this.ValorActual = '';
        this.ValorAnterior = '';
    }

    addNumber(numero){
        if(numero === '.' && this.ValorActual.includes('.')) return
        this.ValorActual = this.ValorActual.toString() + numero.toString();
        this.printValues();

    }

    printValues(){
        this.dsiplayValorActual.textContent = this.ValorActual;
        this.displayValorAnterior.textContent = this.ValorAnterior;
        
    }
}