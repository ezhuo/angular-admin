import { SweetAlertService } from './../../../@core/utils/sweetalert2.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../@core/data/auth.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { StateService } from '../../../@core/data/state.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() position = 'normal';

  user: any;
  userInfo: any;
  userInfo$: any;

  userMenu = [
    { title: '个人资料', target: 'profile' },
    { title: '退出系统', target: 'logout' }
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    public stateService: StateService,
    private sweetAlertService: SweetAlertService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userInfo$ = this.userService.getUser().subscribe(data => {
      console.log(data);
      return (this.userInfo = data);
    });
  }

  ngOnDestroy() {
    if (this.userInfo$) {
      this.userInfo$.unsubscribe();
    }
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  onMenu($event) {
    this[$event.target]($event);
  }

  logout($event) {
    this.sweetAlertService.confirm('请问要确定退出吗？').then(data => {
      if (data.value) {
        if (this.authService.logoutAuth()) {
          this.router.navigate([this.stateService.config.router.login]);
        }
      }
    });
  }

  profile($event) {
    console.log($event);
  }
}
