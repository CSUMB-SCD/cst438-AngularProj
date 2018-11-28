import {Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Look jQuery Animation working in action!';

public ngOnInit() {

$(document).ready(function($) {
  $('.menu-icon').on('click', function() {
    $(this).toggleClass('open');
    $('.container').toggleClass('nav-open');
    $('nav ul li').toggleClass('animate');
  });

});
}

}
