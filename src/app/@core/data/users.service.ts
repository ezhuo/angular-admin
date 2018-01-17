import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as helper from '../../@helpers';

@Injectable()
export class UserService {
  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' }
  };

  private __userInfo: any = {};
  private __api_dt: any = null;

  constructor() {}

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUser(): Observable<any> {
    return Observable.of(this.__userInfo);
  }

  set userInfo(dd: any) {
    this.__userInfo = dd;
    if (dd) {
      const pic = helper.parseJSON(dd.images) || [];
      if (pic && pic.length > 0) {
        this.__userInfo.picture = pic[0].path;
      }
    }
  }

  get userInfo() {
    return this.__userInfo;
  }

  set apiDt(dd: any) {
    this.__api_dt = dd;
  }

  get apiDt() {
    return this.__api_dt;
  }
}
