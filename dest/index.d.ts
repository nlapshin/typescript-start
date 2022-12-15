interface ICalculator {
    sum(a: number, b: number): number;
    sub(a: number, b: number): number;
}
declare class Calculator implements ICalculator {
    sum(a: number, b: number): number;
    sub(a: number, b: number): number;
    protected protectedMethod(): void;
    private privateMethod;
}
declare const calc: Calculator;
declare class SuperCalculate extends Calculator {
    constructor();
}
