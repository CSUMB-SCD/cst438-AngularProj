import { Component, OnInit } from '@angular/core';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private signIn: SigninService) { }

  ngOnInit() {
  }
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.signIn.setUser(username).subscribe((id: string) => {
      console.log(id);
      localStorage.setItem('id', id);
    }, (error) => {
      console.log(error);
    });


  }

}
