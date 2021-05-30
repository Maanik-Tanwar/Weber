import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

/**
 * Generated class for the LoveCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-love-calculator',
  templateUrl: 'love-calculator.html',
})
export class LoveCalculatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  firstName:any;
  secondName:any;
  firstSum:any=0;
  secondSum:any=0;
  totalSum=0;
  sum=0;
  result:any;
  hidden:any=true;

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoveCalculatorPage');
  // }
  findSum(number){
    this.sum=0
    while(number>0){
      this.sum+= (number%10)
      number=Math.floor(number/10)
      }
      return (this.sum)
  }
  onSubmit(value){
    if(value.firstName!=null && value.secondName != null)
    {this.firstSum=this.secondSum=0
    // console.log(value)
    this.firstName=value.firstName.toLowerCase()
    this.secondName=value.secondName.toLowerCase()

    for (let i = 0; i < this.firstName.length; i++) {
      this.firstSum=this.firstSum+ this.firstName.charCodeAt(i) 
    }
    for (let i = 0; i < this.secondName.length; i++) {
      this.secondSum=this.secondSum+ this.secondName.charCodeAt(i)
    }
    this.totalSum=this.findSum(this.firstSum+this.secondSum)
    if (this.totalSum>15){
      this.totalSum=15-(this.totalSum-15)
      this.result=Math.ceil(this.totalSum*6.66)
      this.hidden=false
    }
    this.result=Math.ceil(this.totalSum*6.66)
    this.hidden=false}
  }

  onRefresh(form){
    form.reset()
    this.hidden=true
  }

}
