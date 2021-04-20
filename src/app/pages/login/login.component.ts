import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRepService } from 'src/app/api-rep.service';
import { NotificationserviceService } from 'src/app/notificationservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  isClicked = 0;
  errorMessage='';
  constructor(
    public apiRep: ApiRepService,
    public router: Router,
    public notficationService: NotificationserviceService
  ) { }

  ngOnInit(): void {
  }

  UserLogin() {
    console.log("Hii")
    let body = {
      email: this.email,
      password: this.password
    }
    this.isClicked = 1;
    this.apiRep.login(body).subscribe((res: any) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.apiRep.userInfo().subscribe(res => {
          this.apiRep.userDetails = res;
          this.apiRep.loginStatus=true;
          this.router.navigateByUrl('/admin-dashboard');
          this.isClicked = 0;
        })
      }
      else {
        this.isClicked = 0;
        console.log("Error", res)
        this.notficationService.showError(res.message, 'Login Error');
        this.errorMessage=res.message;
      }
    })
  }
}
