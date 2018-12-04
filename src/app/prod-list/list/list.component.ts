import { async } from '@angular/core/testing';
import { CartService } from './../../cart.service';
import { ItemComponent } from './../item/item.component';
import { DataService } from './../../data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/modal.service';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import * as $ from 'jquery';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ModalService]
})
export class ListComponent implements OnInit {

  products$: any;
  prods: ItemComponent[];
  public button: string;
  public localData: any =  [];
  public shoppingCartItems$: Observable<ItemComponent[]>;

  constructor(
@Inject(SESSION_STORAGE) private storage: WebStorageService,
    private data: DataService,
    private modalService: ModalService,
    private cartService: CartService,
    ) {this.shoppingCartItems$ = this
      .cartService
      .getItems();
    this.shoppingCartItems$.subscribe(_ => _);
    this.prods = [];

   // this.storage.remove('cart');
    if ( this.storage.get('cart') === null) {
      this.storage.set('cart', this.prods);
      this.storage.set('total', 0);
    }
    this.getFromLocal();
  }

  ngOnInit() {
    this.data.getProductList().subscribe(
      data => this.products$ = data
    );
  }
  openModal(id: string) {
    this.modalService.open(id);
    this.button = 'Add to cart';
    document.getElementById('text' + id).style.color = 'black';


}

closeModal(id: string) {
    this.modalService.close(id);
}

public addToCart(product: ItemComponent) {



  this.button = 'Added!';
  document.getElementById('text' + product.id).style.color = 'green';
  const inputEle = <HTMLInputElement> document.getElementById('text' + product.id);
  // let butEle= <HTMLInputElement> document.getElementById('but' + product.id);
  product.quantity = Number(inputEle.value);

  this.storage.set('total', this.storage.get('total') + (product.price * product.quantity));

  $('#text' + product.id).prop('disabled', true);
  $('#but' + product.id).prop('disabled', true);

    this.prods.push( product);
    this.cartService.addToCart(product);
    this.saveInLocal( product );


}

saveInLocal( val): void {
  console.log('recieved= key:' + 'cart' + 'value:' + val);
  this.storage.set('cart', this.prods);
 }

getFromLocal(): any {
  console.log('recieved= key:' + 'cart');
    this.prods = this.storage.get('cart');
    console.log(this.prods);
    console.log(this.storage.get('total'));
}
}
