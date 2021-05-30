import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
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

  }
  open(){
    // console.log("clicked")

   window.open('https://www.pacmanclicks.com','_blank') ;

  }

}
