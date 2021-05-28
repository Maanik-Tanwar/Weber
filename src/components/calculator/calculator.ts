import { Component } from '@angular/core';

/**
 * Generated class for the CalculatorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorComponent {

  text: string;

  constructor() {
    console.log('Hello CalculatorComponent Component');
    this.text = 'Hello World';
  }

}
