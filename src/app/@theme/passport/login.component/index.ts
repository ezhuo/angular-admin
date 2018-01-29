import { AuthService } from '../../../@core/data/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoticeService } from '../../../@core/utils/notice.service';
import { StateService } from '../../../@core/data/state.service';
import { Router, Route } from '@angular/router';
import { HttpService } from '../../../@core/data/http.service';
import 'rxjs/add/operator/finally';
import { SweetAlertService } from '../../../@core/utils/sweetalert2.service';

@Component({
  selector: 'zs-auth-login',
  styleUrls: ['./index.scss'],
  templateUrl: './index.html'
})
export class AuthLoginComponent implements OnInit, OnDestroy {
  config: any = {};
  showMessages: any = {
    error: null,
    success: null
  };
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  validation = {
    password: {
      required: true,
      minLength: 4,
      maxLength: 50
    },
    account: {
      required: true,
      minLength: 1
    }
  };
  login$: any = null;

  constructor(
    protected noticeService: NoticeService,
    protected router: Router,
    public stateService: StateService,
    protected http: HttpService,
    protected authService: AuthService,
    protected sweetAlertService: SweetAlertService
  ) {}

  ngOnInit() {
    // 检查是否已登录
    if (this.authService.checkAuth()) {
      this.goHome();
    }
  }

  login(): void {
    const self = this;
    this.errors = this.messages = [];
    this.submitted = true;
    this.noticeService.info('正在登录中...');
    this.login$ = this.authService
      .doLogin(this.user)
      .finally(() => {
        self.submitted = false;
      })
      .subscribe(
        data => {
          this.showMessages.error = false;
          this.showMessages.success = true;
          this.messages = ['登录成功！'];
          this.errors = [];
          this.noticeService.success('登录成功！');
          setTimeout(() => {
            console.log('login....');
            return this.goHome();
          }, 0);
        },
        error => {
          this.noticeService.error('登录失败！');
          this.showMessages.error = true;
          this.messages = [];
          this.errors = [error.error.message || '登录失败!'];
        }
      );
  }

  swal() {
    this.sweetAlertService.success('fdafd',5000).then(result => {
      console.log(result);
    });
  }

  goHome() {
    return this.router.navigate([this.stateService.config.router.home]);
  }

  ngOnDestroy() {
    if (this.login$) {
      this.login$.unsubscribe();
    }
  }
}
