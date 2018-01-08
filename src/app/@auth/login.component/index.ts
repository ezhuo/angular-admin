import { AuthService } from './../../@core/data/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoticeService } from '../../@core/data/notice.service';
import { StateService } from '../../@core/data/state.service';
import { Router } from '@angular/router';
import { getDeepFromObject } from '../../@core/helpers';
import { HttpService } from '../../@core/data/http.service';

@Component({
  selector: 'zs-auth-login',
  styleUrls: ['./index.scss'],
  templateUrl: './index.html'
})
export class AuthLoginComponent implements OnDestroy {
  config: any = {};
  showMessages: any = {
    error: null
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
    protected stateService: StateService,
    protected http: HttpService,
    protected authService: AuthService
  ) {}

  login(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.login$ = this.authService.doLogin(this.user).subscribe({
      next: result => {
        setTimeout(() => {
          return this.router.navigate([this.stateService.config.router.home]);
        }, 1000);
      },
      error: err => {},
      complete() {
        this.submitted = false;
      }
    });
  }

  http_test($event) {
    console.log($event);
    return this.http
      .get('/api/test/test')
      .subscribe(data => console.log(data), err => console.log(err));
  }

  ngOnDestroy() {
    if (this.login$) {
      this.login$.unsubscribe();
    }
  }
}
