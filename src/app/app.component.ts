/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { ToasterConfig } from 'angular2-toaster';
import { NoticeService } from './@core/data/notice.service';

@Component({
  selector: 'zs-app',
  template: `
      <toaster-container [toasterconfig]="noticeService.config"></toaster-container>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    public noticeService: NoticeService
  ) {}

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
