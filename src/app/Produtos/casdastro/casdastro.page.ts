import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Vestes } from 'src/app/Model/Vestes';
import { ToastService } from 'src/app/service/toast.service';
import { VestesService } from 'src/app/service/vestes.service';

@Component({
  selector: 'app-casdastro',
  templateUrl: './casdastro.page.html',
  styleUrls: ['./casdastro.page.scss'],
})
export class CasdastroPage implements OnInit {

  private veste: Vestes | any;
  public modoEdicao = false;
  public VestesForm: FormGroup | any;

  constructor(
    private vestesService : VestesService,
    private formBuilder: FormBuilder,
		private	route: ActivatedRoute,
		private	toastService:	ToastService,
  ) { }

  iniciarEdicao()	{
    this.modoEdicao	=	true;
  }

  cancelarEdicao()	{
    this.VestesForm.setValue(this.veste);
    this.modoEdicao	=	false;
  }
  
  async	submit()	{
    this.veste = this.VestesForm.value
    await this.vestesService.update(this.veste);
    this.toastService.apresentacaoToast('Gravação	bem	sucedida',	3000,	'top');
    this.modoEdicao	=	false;
  }


  async ngOnInit() {
    const	id	=	this.route.snapshot.paramMap.get('id');

    if(id	&& Guid.isGuid(id))	{
      this.veste = await this.vestesService.getById(id);
    }
    else{
      this.veste	=	{id:	Guid.createEmpty(),	nome:	'',tamanho: '',modelo: '',cor:'',valor:	0.00,condicao: '',variedade: ''};
      this.modoEdicao	=	true;
    }

    this.VestesForm	=	this.formBuilder.group({
      id:	[this.veste.id],
      nome:	[this.veste.nome,	Validators.required],
      tamanho: [this.veste.tamanho,Validators.required],
      modelo : [this.veste.modelo,Validators.required],
      cor : [this.veste.cor,Validators.required],
      valor:	[this.veste.valor,	Validators.required],
      condicao : [this.veste.condicao,Validators.required],
      variedade : [this.veste.variedade,Validators.required]

    });
  }

}
