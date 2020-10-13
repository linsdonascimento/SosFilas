import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { DBService } from '../database/db.sosficha';
import { usuario } from '../module/usuario';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  providers: [DBService]
})
export class CadastroPage implements OnInit {

  CadastroUser: usuario;

  Usuarios: usuario[];

  constructor(
    private router: Router,
    public ModalController: ModalController,
    private afAuth: AngularFireAuth,
    public ToastCtrl: ToastController,
    public dbService: DBService

  ) {
    this.CadastroUser = new usuario;
   }

  ngOnInit() {
  }

  salvar(){

    this.afAuth.createUserWithEmailAndPassword(this.CadastroUser.email,this.CadastroUser.senha)
    this.dbService.insertInList<usuario>('usuario',this.CadastroUser)
    .then(() => {
      this.CadastroUser = new usuario,
      this.presentToast('Usuario Cadastrado com sucesso');
        this.backToLogin(); 
      
    })

    .catch(error => {
      this.presentToast('Erro ao cadastrar o cliente');
      console.log(error);
    })
    
  }
  
  async presentToast(message: string) {
    const toast = await this.ToastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  

  backToLogin() {
      this.router.navigate(['/login']);
    }


  

}
