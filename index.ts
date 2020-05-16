import './style.css';
import Calculator from './Calculator';

const aInput: HTMLInputElement = document.getElementById('a') as HTMLInputElement;
const bInput: HTMLInputElement = document.getElementById('b') as HTMLInputElement;
const operationSelect: HTMLSelectElement = document.getElementById('operation') as HTMLSelectElement;
const resultInput: HTMLInputElement = document.getElementById('result') as HTMLInputElement;

new Calculator(aInput, bInput, operationSelect, resultInput);