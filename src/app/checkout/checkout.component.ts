import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
 import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  netImage: any = 'https://www.asianfoodgrocer.com/media/catalog/category/jasmine-rice_1.jpg';
  msg: String = '';
  // Items Array
   itemsArray = []; //[
  //   {'name': 'White Rice', image: this.netImage , price: 2, quantity:1 },
  //   {'name': 'Doritos Tapatio', image: "https://images-na.ssl-images-amazon.com/images/I/510X88V3r-L._SY355_.jpg", price:2, quantity:1},
  //   {'name': 'Dove soap', image: "https://images-na.ssl-images-amazon.com/images/I/61KQeHn6W2L._SX466_.jpg" , price:1, quantity:1},
  //  ];
  name: String;
  model2: any = {};
  fundsMSG: String = '';
  hideUpdate: boolean = true;
  items$: Object;
  funds$: Object;
  balance$: Object;
  myValue;
  totalAmount: number;


  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService, private data: DataService, private router: Router) {
    console.log(storage.get('id'));
    this.name = this.storage.get('name');

    console.log(this.name);
    if (storage.get('id') == null) {
      this.router.navigate(['sign-in']);
    }
    this.myValue = 0;
    this.itemsArray = this.storage.get('cart');
  }

  ngOnInit() {

    this.data.getBalancebyID(this.storage.get('id')).subscribe(
      data => this.balance$ = data
    );
    this.data.verifyFunds(this.storage.get('id'), this.totalAmount).subscribe(
      data => this.funds$ = data
    );
    this.countItems();
    this.getSum();
    this.verifyingFunds(this.funds$);
  }
  verifyingFunds(funds$):void{
    if(funds$==false){
      this.hideUpdate=false;
      this.fundsMSG = "Sorry! You don't have enough credit to proceed.";
    }
    else{
      this.hideUpdate=true;
      this.fundsMSG = "Congratulations! You have enough credit to make this purchase.";
    }
  }
  countItems():number{
    this.myValue=0;
    for(let j = 0; j < this.itemsArray.length; j++){
        this.myValue += this.itemsArray[j].quantity;
    }
    return this.myValue;
  }
  updateItem(i):void {
    this.itemsArray[i].quantity = this.model2.quantity;
    this.countItems();
    this.getSum();
    this.storage.set('cart', this.itemsArray);

  }
  getSum():Number{
   this.totalAmount=0;
   for(let j = 0; j < this.itemsArray.length; j++){
    if(this.itemsArray[j].quantity>1){
      this.totalAmount+=  Number(this.itemsArray[j].quantity * this.itemsArray[j].price);
    }
    else{
      this.totalAmount+= Number(this.itemsArray[j].price);
    }
  }
    return this.totalAmount;
  }
  // eliminates item from the list
  deleteItem(i):void {
      this.itemsArray.splice(i, 1);
      this.countItems();
      this.getSum();
      this.storage.set('cart', this.itemsArray);

  }
  closeAlert():void {
    this.msg = '';
  }


}
