import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// ------------------------login vars--------------------------//
  form_login: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessageLogin = '';
  roles: string[] = [];
// ------------------------signup vars--------------------------//
  form_signup: any = {
    username: null,
    email: null,
    password: null,
    fullName: null,
    address: null,
    phone: null
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessageSignup = '';


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmitLogin(): void {
    const { username, password } = this.form_login;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessageLogin = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }


  onSubmitSignup(): void {
    const { username, email, password, fullName, address, phone } = this.form_signup;

    this.authService.register(username, email, password, fullName, address, phone).subscribe({

      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessageSignup = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
