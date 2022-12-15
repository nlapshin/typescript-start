interface ICalculator {
  sum(a: number, b: number): number
  sub(a: number, b: number): number
  mul(a: number, b: number): number
}

class Calculator implements ICalculator {
  public sum(a: number, b: number) {
    return a + b
  }

  public sub(a: number, b: number) {
    return a - b
  }

  public mul(a: number, b: number) {
    return a * b;
  }

  protected protectedMethod() {
    console.log('protected')
  }

  private privateMethod() {
    console.log('private')
  }
}

const calc = new Calculator()

class SuperCalculate extends Calculator {
  constructor() {
    super()

    this.protectedMethod()
  }
}



setInterval(() => {

}, 10000000)
