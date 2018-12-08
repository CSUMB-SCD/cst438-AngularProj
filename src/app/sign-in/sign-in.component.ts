import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { SigninService } from '../signin.service';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService, private signIn: SigninService, private router: Router) {
    if (storage.get('id') != null) {
      this.router.navigate(['shop']);
    }
   }

  ngOnInit() {
  }
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.signIn.setUser(username).subscribe((id: string) => {
      console.log(id);
      this.storage.set('id', id);
      this.storage.set('name',    username.substring(0, 1).toUpperCase() + username.substring(1));
      this.router.navigate(['shop']);
    }, (error) => {
      console.log('error');
    });


  }

}
