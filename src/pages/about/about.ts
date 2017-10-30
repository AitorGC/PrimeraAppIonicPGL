import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from "../contact/contact";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    imgACambiar: string;
    loQueEs: string;
    motero: false;


    constructor(public navCtrl: NavController) {
        this.imgACambiar = "moto";
        this.loQueEs = "Eres motero";
    }

    cambiarRollo(): void {
        if (this.motero) {
            this.imgACambiar = "coche";
            this.loQueEs = "Eres un macarra";
        } else {
            this.imgACambiar = "moto";
            this.loQueEs = "Eres motero";
        }
    }

    irATerceraPantalla(): void {
        this.navCtrl.push(ContactPage);
    }

}
