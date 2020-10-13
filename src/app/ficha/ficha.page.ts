import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DBService } from '../database/db.sosficha';
import { ficha } from '../module/Ficha';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.page.html',
  styleUrls: ['./ficha.page.scss'],
  providers: [DBService]
})
export class FichaPage implements OnInit {

  fichas: ficha;

  constructor(
    private router: Router,
    public toastController: ToastController,
    public dbService: DBService
  ) { 
    this.fichas = new ficha();
  }

  ngOnInit() {
  }

  confirma() {
    if(this.fichas){
      this.insert();
    }
  }

  private insert() {

    this.dbService.insertInList<ficha>('/ficha', this.fichas)
    .then(() =>{
      this.presentToast('Confirmado')
      this.router.navigate(["/listar-ficha"]);
    }).catch(error =>{
      console.log(error);
    })

  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  

}
