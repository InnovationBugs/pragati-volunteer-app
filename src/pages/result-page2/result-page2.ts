import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FinalPage } from '../final/final';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the ResultPage2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result-page2',
  templateUrl: 'result-page2.html',
})
export class ResultPage2Page {

  idd : any = this.navParams.get('idDonate');
  statee : any = this.navParams.get('state');

  donate =[
    {
      id: 0,
      donate : 'Bread, Chapattis etc.',
      time : '14:56',
      name : 'Shyam',
      Address : '45 Link Road, Kolkata',
      phone: '83489365836',
      state : 'West Bengal'
    },
    {
      id: 1,
      donate : 'Butter, Rice , Soup',
      name : 'Mohan',
      time : '10:56',
      Address : '44 Mayur Colony, Mumbai',
      phone: '54363534445',
      state : 'Maharashtra'
    },
    {
      id: 3,
      donate : 'Bread, Chapattis, Dal',
      name : 'Virat',
      time : '16:56',
      Address : ' Xyz Colony, New Delhi',
      phone: '54363464634',
      state : 'Delhi'
    },
    {
      id: 4,
      donate : 'Chapattis etc.',
      name : 'Gopal',
      time : '18:56',
      Address : '49 Lalbazaar Road',
      phone: '54634574575',
      state : 'West Bengal'
    },
    {
      id: 5,
      donate : 'Parathas ,Chapattis etc.',
      name : 'Mohan',
      time : '8:56',
      Address : '49 Apart Road',
      phone: '83489365836',
      state : 'Bihar'
    }
  ];
  
  needy =[
    {
      id: 0,
      name : 'Raghav',
      age : '22',
      address : '67 Gopal Math, Kolkata',
      state : 'West Bengal',
      adhaar : '6437825723683',
      phone : '6432762873'
    },
    {
      id: 1,
      name : 'Madhav',
      age : '22',
      address : '67 Gopal Math, Kolkata',
      state : 'West Bengal',
      adhaar : '6437825723683',
      phone : '6432762873'
    },
    {
      id: 2,
      name : 'Raghav',
      age : '32',
      address : '67 Gopal Math, New Delhi',
      state : 'Mumbai',
      adhaar : '6437825723683',
      phone : '6432762873'
    },
    {
      id: 3,
      name : 'Rakesh',
      age : '42',
      address : '67 Gopal Avenue, Kolkata',
      state : 'West Bengal',
      adhaar : '6437825723683',
      phone : '6432762873'
    },
    {
      id: 4,
      name : 'Raj Shekhar',
      age : '27',
      address : '67 Gopal Math, ZYZ',
      state : 'Bihar',
      adhaar : '6437825723683',
      phone : '6432762873'
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage2Page');
  }
process(id : any){
  const alert = this.alertCtrl.create({
    title: 'Congrats!!',
    subTitle: 'Dear Volunteer, your task has been placed, please try to complete in 25mins',
    buttons: ['OK']
  });
  alert.present();

  this.navCtrl.push(DashboardPage);
}



}
