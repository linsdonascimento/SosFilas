import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { usuario } from '../module/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario : usuario

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public toastController: ToastController
  ) { 

    this.usuario = new usuario;

  }

  ngOnInit() {
  }

  login(){

    this.afAuth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha)
    .then(result =>{
      this.router.navigate(['/ficha']);

    }).catch(error => {
      this.presentToast('E-mail e/ou senha inválido(s).');
      delete this.usuario.senha;
    });
}

async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000
  });
  toast.present();
}

newUsuario() {
  this.router.navigate(['/cadastro']);
}

  

}
