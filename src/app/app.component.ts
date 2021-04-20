import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRepService } from './api-rep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collapsed = true;
  isScrollTop: boolean = true;
  selectedPage;
  constructor(
    public router:Router,
    public apiRep:ApiRepService,
  ) { }

  ngOnInit(): void {
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  ngAfterViewInit(){
    if(localStorage.getItem('token')==null){
      this.apiRep.loginStatus=false
    }
    else {
      this.apiRep.userInfo().subscribe((res:any)=>{
        this.apiRep.loginStatus=true;
      },(err)=>{
        this.apiRep.loginStatus=false;
      })
    }
  }
  onScroll(e) {
    // console.log("Scroll Height ",document.getElementById('nav').scrollTop);
    let element = document.getElementById('nav');
    if (window.pageYOffset > element.clientHeight) {
      this.isScrollTop = false;
    } else {
      this.isScrollTop = true;
    }

  }
  ChangeNav() {
    if (this.isScrollTop == true) {
      return { 'bg-transparent': true,'bg-white':false }
    }
    else {
      return { 'bg-transparent': false,'bg-white':true }
    }
  }
  ChangeNavLink(){
    if (this.isScrollTop == true) {
      return { 'nav-link-white':true }
    }
    else {
      return { 'nav-link-white':false }
    }
  }

  checkLoginStatus(){
    if(localStorage.getItem('token')==null){
      this.router.navigateByUrl('/login');
    }
    else{
      this.apiRep.userInfo().subscribe((res:any)=>{
        console.log(res)
        this.apiRep.userDetails=res;
        this.apiRep.loginStatus=true;
        this.router.navigateByUrl('/admin-dashboard')
      },(err)=>{
        this.router.navigateByUrl('/login');
      })
    }
  }

  navigateTo(route){
    if(route=='/admin-dashboard'){
      this.checkLoginStatus();
    }
    else{
      this.router.navigateByUrl(route)
    }
    
  }
}
