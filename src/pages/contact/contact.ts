import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    nacionalidad: string;
    privacidad: boolean;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        this.nacionalidad = "Espana";
        this.privacidad = false;
    }

    privacidadAlerta(): void {
        if (this.privacidad) {
            this.showAlertConfirmacion();
        } else {
            this.showAlertPrivacidad();
        }
    }

    showAlertNacionalidad(): void {
        let alert = this.alertCtrl.create({
            title: 'Has pulsado en ' + this.nacionalidad,
            subTitle: 'Tú vienes de ' + this.nacionalidad,
            buttons: ['OK']
        });
        alert.present();
    }

    showAlertPrivacidad(): void {
        let alert = this.alertCtrl.create({
            title: 'NO PUEDE ACCEDER',
            subTitle: 'Debe aceptar la Política de Privacidad',
            buttons: ['OK']
        });
        alert.present();
    }

    showAlertConfirmacion(): void {
        let alert = this.alertCtrl.create({
            title: '¡GRACIAS!',
            subTitle: 'Muchas gracias por colaborar',
            buttons: ['OK']
        });
        alert.present();
    }
}
