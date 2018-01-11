import { Storage } from './../@core/public/storage';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
import { UserService } from '../@core/data/users.service';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `
})
export class PagesComponent implements OnInit, OnDestroy {
  protected __local = Storage.local();
  protected __session = Storage.session();
  public menu = MENU_ITEMS;

  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log(this.__local.get('menu'));
  }

  ngOnDestroy() {}
}
