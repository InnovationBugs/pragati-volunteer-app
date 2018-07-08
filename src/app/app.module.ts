import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VolSignupPage } from '../pages/vol-signup/vol-signup';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ExtraFoodInfoPage } from '../pages/extra-food-info/extra-food-info';
import { ProvideNeedyDataPage } from '../pages/provide-needy-data/provide-needy-data';
import { SelectStatePage } from '../pages/select-state/select-state';
import { ResultPage } from '../pages/result/result';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VolSignupPage,
    DashboardPage,
    ExtraFoodInfoPage,
    ProvideNeedyDataPage,
    SelectStatePage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VolSignupPage,
    DashboardPage,
    ExtraFoodInfoPage,
    ProvideNeedyDataPage,
    SelectStatePage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
