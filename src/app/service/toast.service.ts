import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastcontroller: ToastController) { }
  async apresentacaoToast(message:string,duration:number,position:'top'|'bottom')
  {
    const toast = await this.toastcontroller.create({
      message,
      duration,
      position
    });

    toast.present();
  }
}