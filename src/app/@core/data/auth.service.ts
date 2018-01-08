import { NoticeService } from './notice.service';
import { appConfig } from './../public/config';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService } from './http.service';

@Injectable()
export class AuthService {
  protected __token: string = 'token-value';
  protected __isAuth: Boolean = false;
  protected __config = new appConfig();

  constructor(
    private noticeService: NoticeService,
    private http: HttpService
  ) {}

  set token(token: string) {
    this.__token = token;
  }

  /**
   * Returns the token value
   * @returns string
   */
  get token() {
    return this.__token;
  }

  set isAuth(bool) {
    this.__isAuth = bool;
  }

  get isAuth() {
    this.__token = null;
    return this.__isAuth;
  }

  getRequestHeaders($data: any): HttpHeaders {
    let r_data = $data || {};
    //数据发送类型
    let style = this.__config.http.style || '10';
    let validate = '';
    let token = this.token;
    try {
      r_data = JSON.stringify(r_data);
      validate = style + token + r_data + this.__config.http.check;
      console.log(validate);
      validate = md5(validate);
    } catch (e) {
      this.noticeService.error('package build error');
      console.error(e);
    }

    return new HttpHeaders()
      .set('style', style.toString())
      .set('token', this.__token)
      .set('validate', validate);
  }

  doLogin(loginData: {}): Observable<any> {
    const login$ = Observable.never();

    this.http.get('', {}).subscribe({
      next: data => {

      }
    });
    return login$;
  }
}
