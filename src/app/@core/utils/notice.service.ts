import { Injectable } from '@angular/core';
import {
  ToasterService,
  ToasterConfig,
  Toast,
  BodyOutputType
} from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

@Injectable()
export class NoticeService {
  constructor(private toasterService: ToasterService) {}

  public config: ToasterConfig;
  private timeout = 5000;
  private toastsLimit = 5;
  private isNewestOnTop = true;
  private isHideOnClick = true;
  private isDuplicatesPrevented = false;
  private isCloseButton = true;

  private types: string[] = ['default', 'info', 'success', 'warning', 'error'];
  private animations: string[] = [
    'fade',
    'flyLeft',
    'flyRight',
    'slideDown',
    'slideUp'
  ];
  private positions: string[] = [
    'toast-top-full-width',
    'toast-bottom-full-width',
    'toast-top-left',
    'toast-top-center',
    'toast-top-right',
    'toast-bottom-right',
    'toast-bottom-center',
    'toast-bottom-left',
    'toast-center'
  ];

  default(msg) {
    return this.showToast(this.types[0], null, msg);
  }
  info(msg) {
    return this.showToast(this.types[1], null, msg);
  }
  success(msg) {
    return this.showToast(this.types[2], null, msg);
  }
  warning(msg) {
    return this.showToast(this.types[3], null, msg);
  }
  error(msg) {
    return this.showToast(this.types[4], null, msg);
  }
  clear() {
    this.toasterService.clear();
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.positions[4],
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animations[0],
      limit: this.toastsLimit
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml
    };
    this.toasterService.popAsync(toast);
  }
}
