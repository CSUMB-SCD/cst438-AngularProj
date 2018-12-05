import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss'],
  providers: [ModalService]
})
export class ProdListComponent implements OnInit {

  thingy: string;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.thingy = 'Weird???';
    this.modalService.add('details');
  }
  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
}
