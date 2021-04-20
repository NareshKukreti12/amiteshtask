import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiRepService } from 'src/app/api-rep.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public apiRep:ApiRepService,public router:Router) { }

  ngOnInit(): void {
  }
  canActivate(): boolean {
    alert("Helll")
    if (!this.apiRep.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
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
