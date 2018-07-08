import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user.interface';
import { AngularFireAuthModule ,AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { VolSignupPage } from '../vol-signup/vol-signup';
import { DashboardPage } from '../dashboard/dashboard';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,public alertCtrl: AlertController,public navCtrl: NavController) {

  }

  register() {
    this.navCtrl.push(VolSignupPage);
  }

  async login(user : User) {
    try{
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(result){
         this.navCtrl.setRoot(DashboardPage);
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Sorry !',
        subTitle: 'Unable to Authenticate',
        buttons: ['OK']
      });
      alert.present();
    }

    }
    catch(e){
      console.log(e);
    }
  }
}

