import { ItemComponent } from './prod-list/item/item.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get('https://groceryservice.herokuapp.com/all');
  }

}
