import { Injectable } from '@angular/core';
import {ItemComponent} from './prod-list/item/item.component';
import { Subject, Subscriber, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<ItemComponent[]> = new BehaviorSubject([]);
  private itemsInCart: ItemComponent[] = [];
  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }
  public addToCart(item: ItemComponent) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
    // sessionStorage.cartService
  }
  public initCart(items: ItemComponent[]) {
    this.itemsInCart = items;
  }

  public getItems(): Observable<ItemComponent[]> {
    return this.itemsInCartSubject;
  }

}
