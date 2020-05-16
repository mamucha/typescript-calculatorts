import IOperation from './IOperation';
import { OperationEnum } from './OperationEnum';

export default class Calculator {
  private resultEl: HTMLInputElement;
  private operation: IOperation;

  constructor(private aEl: HTMLInputElement, private bEl: HTMLInputElement, 
              private operationEl: HTMLSelectElement, resultEl: HTMLInputElement) {
                this.resultEl = resultEl;
                this.init();
              }

  init() {
    this.aEl.valueAsNumber = this.bEl.valueAsNumber = this.resultEl.valueAsNumber = 0;
    this.aEl.onblur = this.handleChange.bind(this);
    this.bEl.onblur = this.handleChange.bind(this);
    this.operationEl.onchange = this.handleChange.bind(this);
  }

  handleChange() {
    const a = this.aEl.valueAsNumber;
    const b = this.bEl.valueAsNumber;
    const operation = this.operationEl.value;

    if ((!a && a !== 0) || (!b && b !== 0) || !operation) {
      this.resultEl.value = 'Błędne dane!';
      return;
    }

    switch(operation) {
      case OperationEnum.ADD:
        this.operation = this.add;
        break;
      case OperationEnum.SUBTRACT:
        this.operation = this.sub;
        break;
      case OperationEnum.MULTIPLY:
        this.operation = this.mul;
        break;
    }

    this.calculate();
  }

  calculate() {
    this.resultEl.valueAsNumber = this.operation(this.aEl.valueAsNumber, this.bEl.valueAsNumber);
  }

  private add: IOperation = (a:number, b:number) => a + b;

  private sub(a: number, b:number): number {
    return a - b;
  }

  private mul: IOperation = (a:number, b:number) => { return a * b; }
}