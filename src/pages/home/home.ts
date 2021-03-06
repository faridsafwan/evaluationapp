import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usrPage = UsersPage;
  
  constructor (private navCtrl: NavController){}
  
  onGoToUsers(){
    this.navCtrl.push(UsersPage)
    .catch((error) => console.log('Access denied, Argument was '+ error));
  }
}
