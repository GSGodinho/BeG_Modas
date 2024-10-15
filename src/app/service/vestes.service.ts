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

  async	update(veste:	Vestes)	{
    veste.id = Guid.parse(JSON.parse(JSON.stringify(veste.id)).value);
    await this.storage.create();
    if(veste.id.isEmpty())	{
      veste.id	=	Guid.create();
    }
    this.storage.set(veste.id.toString(),	JSON.stringify(veste));
  }

  async getById(id: string): Promise<Vestes>{
    const vesteString = await this.storage.get(id);
    return JSON.parse(vesteString);
  }

  Remove(veste : Vestes)
  {
    veste.id = Guid.parse(JSON.parse(JSON.stringify(veste.id)).value);
    this.storage.remove(veste.id.toString());
  }

  async getAll() {
    let vestes: Vestes[] = [];
    try {
        await this.storage.forEach((value: string, key: string) => {
            const veste: Vestes = JSON.parse(value);
            vestes.push(veste);
        });
        return vestes;
    } catch (error) {
        return error;
    }
  }


}
