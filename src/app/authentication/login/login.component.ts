import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(auth){
    this.authenticationService.login()
    this.router.navigateByUrl('/add-new');
  }
}
