import {Component, Input} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  // providers: [ModalService]
})
export class ModalComponent {
  @Input() modalID =''
  constructor(public modal: ModalService)  {
  }

  ngOnInit(): void{

  }

  closeModal() {
    this.modal.toggleModal(this.modalID)
  }
}
