import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiRepService } from '../../api-rep.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collapsed = true;
  isScrollTop: boolean = true;
  isLoading: boolean = false;
  categories: any = [];
  constructor(public apiRep: ApiRepService, public router: Router) {
    this.apiRep.getCategories().subscribe(res => {
      this.apiRep.categories=res;
   })
  }

  ngOnInit(): void {
    var parent = document.getElementById('container1');
    var child = document.getElementById('container2');
    child.style.right = child.clientWidth - child.offsetWidth + "px";
  }
  ngAfterViewInit() {

  
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
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
      return { 'bg-transparent': true, 'bg-white': false }
    }
    else {
      return { 'bg-transparent': false, 'bg-white': true }
    }
  }
  ChangeNavLink() {
    if (this.isScrollTop == true) {
      return { 'nav-link-white': true }
    }
    else {
      return { 'nav-link-white': false }
    }
  }
  CatDetails(cat) {
    // let navigationExtras: NavigationExtras = { state: { catdetails: cat } };
    // this.router.navigate(['details'], navigationExtras);
    let catId = cat.id;
    this.apiRep.getDetailsById(catId).subscribe(res=>{
        let navigationExtras: NavigationExtras = { state: { catdetails: res,catname:cat.cat_name,cat_id:catId } };
      this.router.navigate(['details'], navigationExtras);
    })
  }
}
