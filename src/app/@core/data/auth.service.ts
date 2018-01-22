import { Storage } from './../public/storage';
import { StateService } from './state.service';
import { NoticeService } from '../utils/notice.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/finally';

import { HttpService } from './http.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  protected __local = Storage.local();
  protected __session = Storage.session();

  constructor(
    private noticeService: NoticeService,
    private http: HttpService,
    protected tokenService: TokenService,
    private stateService: StateService
  ) {}

  /**
   * @param loginData 登录
   */
  doLogin(loginData: any): Observable<any> {
    const login$ = new Subject();
    const http$ = this.http
      .post('/api/auth/login', {
        login_type: 'sys',
        name: loginData.account,
        password: loginData.password
      })
      .finally(() => {
        const to = setTimeout(() => {
          http$.unsubscribe();
          clearTimeout(to);
        }, 0);
      })
      .subscribe(
        data => {
          // 登录成功
          if (this.tokenService.token_write(data.data.token)) {
            this.loginSuccess(data);
            login$.next(data);
          } else {
            login$.error({
              error: {
                message: '数据包不完整，请留意网络安全！'
              }
            });
          }
        },
        error => {
          // 登录失败
          login$.error(error);
        }
      );

    return login$;
  }

  loginSuccess(data: any) {
    if (data && data.data && data.data.menu_list)
      this.__local.set('menu', data.data.menu_list);
  }

  /**
   * 检查权限
   */
  checkAuth(): boolean {
    if (this.tokenService.isAuth) {
      return true;
    }
    return false;
  }

  logoutAuth() {
    return this.tokenService.token_destory();
  }
}
