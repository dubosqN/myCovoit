import { Component, OnInit } from '@angular/core';
import {User } from '../models/user.mode';
import {register} from 'ts-node';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
user = {} as User;
  constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController, private afAuth: AngularFireAuth, private navCtrl: NavController) { }


  ngOnInit() {}

  async register(user: User){
    if (this.formValidation()){
      const loader = this.loadingCtrl.create({
        message: 'Veuillez patienter...'
      });
      (await loader).present();

      try {
        await this.afAuth
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                console.log(data);

                this.navCtrl.navigateRoot('/tabs/tab1');
      });

      } catch (e) {
        this.showToast(e);
      }
      (await loader).dismiss();
    }
  }

  formValidation(){
    if (!this.user.email){
      this.showToast('Saisir une adresse mail.');
    }
    if (!this.user.password){
      this.showToast('Saisir un mot de passe.');
    }

    return true;
  }

  showToast(message: string){
    this.toastCtrl
        .create({
          message,
          duration: 3000,
    })
        .then(toastData => toastData.present());
  }
}
