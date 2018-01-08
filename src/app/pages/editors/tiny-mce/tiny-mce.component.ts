import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tiny-mce-page',
  template: `
    <nb-card>
      <nb-card-header>
        Tiny MCE
      </nb-card-header>
      <nb-card-body>
        <ngx-tiny-mce (editorKeyup)='editContent($event)'></ngx-tiny-mce>
      </nb-card-body>
    </nb-card>
  `
})
export class TinyMCEComponent {
  public editContent(text) {
    console.log(text);
  }
}
