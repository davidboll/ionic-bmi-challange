import { Component } from '@angular/core';
import { CalculatorPage } from '../calculator/calculator';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  calculatorTab = CalculatorPage;
  aboutTab = AboutPage;
  mapTab = MapPage;

  constructor() {

  }
}
