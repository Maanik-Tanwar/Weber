import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HTTP } from '@ionic-native/http';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  films: Observable<any>;
  data:any
  company:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public httpClient: HttpClient ) {
 const RSS_URL="https://www.livemint.com/rss/companies"
 this.films=this.httpClient.get(' https://api.rss2json.com/v1/api.json?rss_url='+RSS_URL);
 this.films
 .subscribe(data => {
   this.data=data;
   this.show()
 })
 
  }
  
  show(){
    // event: any
    this.company=this.data['items']

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
