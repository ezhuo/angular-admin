import { Component } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import { dialogComponent } from './dialog/dialog.component';
import { NoticeService } from './../../../@core/data/notice.service';

@Component({
  selector: 'zs-test',
  styleUrls: ['./test.component.scss'],
  templateUrl: './test.component.html',
  providers: [NgbActiveModal]
})
export class TestComponent {
  constructor(
    private modalService: NgbModal,
    private noticeService: NoticeService,
    private activeModal2:NgbActiveModal
  ) {}
  activeModal: any;

  showLargeModal() {
    this.activeModal = this.modalService.open(dialogComponent, {
      size: 'lg',
      container: 'nb-layout'
    });

    this.activeModal.componentInstance.modalHeader = 'Large Modal';
  }
  showSmallModal() {
    this.activeModal = this.modalService.open(dialogComponent, {
      size: 'sm',
      container: 'nb-layout'
    });

    this.activeModal.componentInstance.modalHeader = 'Small Modal';
  }

  showStaticModal() {
    this.activeModal = this.modalService.open(dialogComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout'
    });

    this.activeModal.componentInstance.modalHeader = 'Static modal';
    this.activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;
  }

  showNotice() {
    this.noticeService.info('message');
  }

  closeResult: string;

  showdialog(content) {
    this.activeModal = this.modalService.open(content);

    this.activeModal.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  closeModal() {
    console.log(this.activeModal2);
    this.activeModal2.close();
  }
}
