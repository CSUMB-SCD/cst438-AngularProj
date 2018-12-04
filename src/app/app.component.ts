import { ItemComponent } from './prod-list/item/item.component';
import { Observable } from 'rxjs';
import {Component, OnInit, ElementRef, AfterViewInit, Inject} from '@angular/core';
import * as $ from 'jquery';
import { CartService } from './cart.service';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public shoppingCartItems$: Observable<ItemComponent[]>;



  constructor(@Inject(SESSION_STORAGE) public storage: WebStorageService, private cartService: CartService) {
      this.shoppingCartItems$ = this
        .cartService
        .getItems();
      this.shoppingCartItems$.subscribe(_ => _);


    }

public ngOnInit() {

$(document).ready(function() {
  $('.menu-icon').on('click', function() {
    $(this).toggleClass('open');
    $('.container').toggleClass('nav-open');
    $('nav ul li').toggleClass('animate');
  });

});
}


}
