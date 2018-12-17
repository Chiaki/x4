import { Wares } from './data/wares-data';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Ware } from './model/model';

@Injectable()
export class WareService {
  getWares(): Ware[] {
    return Wares.all;
  }

  getShips() {
    return of([]);
  }

  getWare(id: string): Ware {
    return Wares[id];
  }

  getWaresUsingWare(id: string): Ware[] {
    const results = Wares.all
      .filter(x => this.isUsing(x, id));
    return results;
  }

  private isUsing(ware: Ware, wareId: string) {
    for (let i = 0; i < ware.production.length; i ++) {
      const production = ware.production[i];
      if (production.wares.find(y => y.ware.id == wareId) != null) {
        return true;
      }
    }

    return false;
  }
}
