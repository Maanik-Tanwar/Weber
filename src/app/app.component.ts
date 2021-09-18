import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { CalculatorPage } from '../pages/calculator/calculator'



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoveCalculatorPage } from '../pages/love-calculator/love-calculator';
import { NewsPage } from '../pages/news/news';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = NewsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Main Page', component: HelloIonicPage },
      { title: 'Listings', component: ListPage },
      { title: 'About', component: AboutPage },
      {title: 'Calculator', component: CalculatorPage},
      {title: 'Love Calculator', component: LoveCalculatorPage },
      {title: 'News Reader', component: NewsPage }


    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // console.log(page)
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
