import { Component, OnInit,ViewChild} from '@angular/core';
import { IonList } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { VestesService } from 'src/app/service/vestes.service';
import { ToastService } from 'src/app/service/toast.service';
import { Vestes } from 'src/app/Model/Vestes';
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  public vestes: any;
  @ViewChild('slidingList') slidingList: IonList | any;

  constructor(
    private vestesService: VestesService,
    private Toastservice: ToastService
  ) { }

  ngOnInit() {
    this.vestesService.getAll().then(veste => {
      this.vestes = veste
    });
  }
  async Removerveste(veste: Vestes)
  {
    this.vestesService.Remove(veste);
    this.Toastservice.apresentacaoToast('Veste Removida',3000,'top');
    await this.slidingList?.closeSlidingItems();
  }

  idAsString(id: Guid): string {
    const idConvertido = JSON.parse(JSON.stringify(id));
    return idConvertido.value
  }

}
  


