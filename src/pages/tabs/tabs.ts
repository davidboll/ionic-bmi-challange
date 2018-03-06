import { Component } from '@angular/core';
import { CalculatorPage } from '../calculator/calculator';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  calculatorTab = CalculatorPage;
  aboutTab = AboutPage;

  constructor() {

  }
}
