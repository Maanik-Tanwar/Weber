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
  company:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public httpClient: HttpClient ) {
  
  this.getFeeds("https://www.livemint.com/rss/companies");
 
  }
  getFeeds(url:any){
    this.films=this.httpClient.get(' https://api.rss2json.com/v1/api.json?rss_url='+url);
    this.films
            .subscribe(data => {
            this.data=data;
            this.show()
          })
  }
  show(){
    // event: any
    this.company=this.data['items']
    // var feed_list= this.company.length
    // console.log("feed list",feed_list)
    // console.log("total",this.data['items'].length)
    // for(var i =feed_list;i<feed_list+4;i++){
    //   if(feed_list<this.data['items'].length){
    //     this.company.push(this.data['items'][i])
    //   }
    // }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
