import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { CalculatorComponent } from '../../components/calculator/calculator';
import { CalculatorPage} from "../calculator/calculator"

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  @ViewChild(Nav) nav: Nav;
  pages=[]
  constructor() {

    // public menu: MenuController;
    this.pages = [
      { title: 'Calculator', component: CalculatorPage },

    ];
  }
  open(){
    // console.log("clicked")

   window.open('https://www.pacmanclicks.com','_blank') ;

  }
  openCalculator(page) {
    console.log("clicked")
    this.nav.setRoot(page.component);
    // navigate to the new page if it is not the current page
    // this.nav.setRoot(page.component);
  }
}
