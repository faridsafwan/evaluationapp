import { Component } from "@angular/core";
import { NavParams } from "ionic-angular/navigation/nav-params";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { NavController } from "ionic-angular/navigation/nav-controller";


@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit{
    name: string;

    constructor (private navParams: NavParams,
                 private navCtrl: NavController){

    }

    ngOnInit(){
        this.name = this.navParams.get('userName');
    }

    onGoBack(){
        //this.navCtrl.pop();
        this.navCtrl.popToRoot();
    }
}