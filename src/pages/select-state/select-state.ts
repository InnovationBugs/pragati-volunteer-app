import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';

/**
 * Generated class for the SelectStatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-state',
  templateUrl: 'select-state.html',
})
export class SelectStatePage {

  state : String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectStatePage');
  }

  search(){
    this.navCtrl.push(ResultPage);
  }

}
