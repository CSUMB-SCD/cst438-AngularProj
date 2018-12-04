import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  netImage:any = 'https://www.asianfoodgrocer.com/media/catalog/category/jasmine-rice_1.jpg';
  msg:string = '';
  // Items Array
   itemsArray = [
    {'productName': 'White Rice', image: this.netImage , price: 2, quantity:1 },
    {'productName': 'Doritos Tapatio', image: "https://images-na.ssl-images-amazon.com/images/I/510X88V3r-L._SY355_.jpg", price:2, quantity:1},
    {'productName': 'Dove soap', image: "https://images-na.ssl-images-amazon.com/images/I/61KQeHn6W2L._SX466_.jpg" , price:1, quantity:1},
   ];
  
  model2:any = {};
  fundsMSG:string='';
  hideUpdate:boolean = true;
  items$: Object;
  funds$: Object;
  balance$: Object;
  myValue; totalAmount;
  

  constructor(private data: DataService) { this.myValue=0;
 }
  ngOnInit() {
   
    this.data.getBalancebyID("5c06d50615a5b80004b89dd7").subscribe(
      data => this.balance$ = data 
    );
    this.data.verifyFunds("5c06d50615a5b80004b89dd7", this.totalAmount).subscribe(
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
  }
  getSum():number{
   this.totalAmount=0;
   for(let j = 0; j < this.itemsArray.length; j++){
    if(this.itemsArray[j].quantity>1){
      this.totalAmount+=  (this.itemsArray[j].quantity * this.itemsArray[j].price);
    } 
    else{
      this.totalAmount+= this.itemsArray[j].price;
    }
  }
    return this.totalAmount;
  }
  // eliminates item from the list
  deleteItem(i):void {
      this.itemsArray.splice(i, 1);
      this.countItems();
      this.getSum();
  }
  closeAlert():void {
    this.msg = '';
  }


}
