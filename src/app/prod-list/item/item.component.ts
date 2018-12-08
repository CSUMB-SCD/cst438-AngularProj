import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() public id: number;
  @Input() public name: String;
  @Input() public price: number;
  @Input() public quantity: number;
  @Input() public desc: String;
  @Input() public img: String;
}
