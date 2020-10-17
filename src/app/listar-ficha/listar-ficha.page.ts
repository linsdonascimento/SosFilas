import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { DBService } from '../database/db.sosficha';
import { FichaPage } from '../ficha/ficha.page';
import { ficha } from '../module/Ficha';
import { usuario } from '../module/usuario';

@Component({
  selector: 'app-listar-ficha',
  templateUrl: './listar-ficha.page.html',
  styleUrls: ['./listar-ficha.page.scss'],
  providers: [DBService]
})
export class ListarFichaPage implements OnInit {

  ListaFicha: ficha[];
  carregando = true;
  loading: any;
  Ficha: ficha;
  user: usuario

  constructor(
      public Router: Router,
      private DBService: DBService,
      public modalController: ModalController,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
  ) { 
    this.Ficha= new ficha;
    this.user = new usuario;
  }

  async ngOnInit() {

    this.carregando = true;
    
    await this.CarregarFicha();

  }

  private async CarregarFicha(){
    this.DBService.listWithUIDs <ficha>('/ficha')
    .then(ListaFicha => {
      this.ListaFicha = ListaFicha;
      this.carregando = false;
      this.loading = false;
      this.loading.dismiss(); 
    }).catch(error =>{
      console.log(error);
    });

  }

  remove(uid:string){
    this.DBService.remove('/ficha', uid)
    .then(() =>{
      alert('Pront! Ja esta Removido');
      this.CarregarFicha();
      
    });
  
  }

  async editar(ListaFicha : ficha) {
    const modal = await this.modalController.create({
      component: FichaPage,
      componentProps: {
       editarficha : ListaFicha
      }
    });
    modal.onDidDismiss()
    .then(result => {
      if (result.data) {

      }
    });
    return  await modal.present();
  
  }
  async presentToast(message: string){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  Confirmar() {
    this.user = new usuario;
    this.Router.navigate(['/login']);
    this.presentToast('Obrigado');
  }
  
  

}
