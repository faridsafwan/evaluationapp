import { Component } from '@angular/core';
import { UserPage } from './user/user';
import { NavController } from 'ionic-angular/navigation/nav-controller';

/**
 * Generated class for the UsersPage page.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor (private navCtrl: NavController){}
  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name});
  }

  ionViewCanEnter(): boolean | Promise<void>{
    console.log('ionViewCanEnter');
    const rnd = Math.random();
    return rnd > 0.1;
  }

  ionViewDidLoad(){
    console.log('ionicViewDidLoad');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }
  ionViewCanLeave(): boolean | Promise<void> {
    console.log('ionViewCanLeave');
    const promise = new Promise ((resolve, reject) =>{
      setTimeout(() =>{
        resolve(); 
       }, 1000);
      });
    return promise; 
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }
  ionViewWillUnload(){
    console.log('ionViewWillUnload');
  }
}
