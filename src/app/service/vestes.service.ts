import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Vestes } from '../Model/Vestes';
import { Guid }	from	'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class VestesService {

  constructor(
    private storage:Storage
  ) {}

  async	update(vestes:	Vestes)	{
    if(vestes.id.isEmpty())	{
      vestes.id	=	Guid.create();
    }
    this.storage.set(vestes.id.toString(),	JSON.stringify(vestes));
  }

  async getById(id: string): Promise<Vestes>{
    const pecaString = await this.storage.get(id);
    return JSON.parse(pecaString);
  }

  async getAll() {
    let vestes: Vestes[] = [];
    try {
        await this.storage.forEach((value: string, key: string) => {
            const peca: Vestes = JSON.parse(value);
            vestes.push(peca);
        });
        return vestes;
    } catch (error) {
        return error;
    }
  }


}
