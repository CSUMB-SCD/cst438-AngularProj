import { ItemComponent } from './../prod-list/item/item.component';
import { CartService } from './../cart.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public CartItems$: Observable<ItemComponent[]> = of([]);
  public CartItems: ItemComponent[] = [];

  constructor(private cartService: CartService) {
    this.CartItems$ = this
      .cartService
      .getItems();

    this.CartItems$.subscribe(_ => this.CartItems = _);
  }

  ngOnInit() {
  }

}
