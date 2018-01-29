import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zs-auth-base',
  template: `
    <nb-layout windowMode>
      <nb-layout-column class="main-content">
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
  styles: ['']
})
export class PassportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
