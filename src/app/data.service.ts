import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'

})
export class DataService {
   constructor(private http: HttpClient){}
   
   getBalancebyID(id:String){
     return this.http.get('https://userservice438.herokuapp.com/balance/'+id);
   }
   verifyFunds(id:String,amount)  {
     return this.http.get('https://userservice438.herokuapp.com/verify/funds/'+ id + '/' + amount);
   }
}
