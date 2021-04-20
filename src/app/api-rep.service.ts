import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class ApiRepService {
  baseUrl = 'https://encoders-softwares.herokuapp.com';

  categories: any = [];
  statusTypes:any=[];
  studyTypes:any=[];
  userDetails:any;
  loginStatus:boolean=false;
  constructor(public http: HttpClient) {
    this.getMedCategories();
    this.getAllStudyType();
    this.getStatusTypes();
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    if(localStorage.getItem('token')==null){
      return false;
    }
    else{
      this.userInfo().subscribe((res:any)=>{
        if(res.success==true){
           this.userInfo=res;
           return true;
        }
        else{
          return false
        }
      },(err)=>{
        return false
      })
    }
    // return !this.jwtHelper.isTokenExpired(token);
  }
  GetToken() {
    return localStorage.getItem('token');
  }
  GetHeader() {
    console.log(localStorage.getItem('token'))
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': this.GetToken()
      })
    };
    return httpOptions
  }
  getMedCategories() {
    this.getCategories().subscribe(res => {
      this.categories = res;
    })
  }
  getStatusTypes(){
    this.getStatus().subscribe(res=>{
       this.statusTypes=res;
    })
  }
  getAllStudyType(){
     this.getStudyType().subscribe(res=>{
       this.studyTypes=res;
     })
  }
  getCategories() {
    return this.http.get(this.baseUrl + "/icmr/medcategories");
  }
  getDetailsById(catId) {
    return this.http.get(this.baseUrl + "/icmr/medcategoriesdesc/" + catId);
  }
  getStudyType() {
    return this.http.get(this.baseUrl + "/icmr/studytype");
  }
  getStatus() {
    return this.http.get(this.baseUrl + "/icmr/status");
  }
  login(body){
    return this.http.post(this.baseUrl+"/icmr/login",body)
  }
  userInfo(){
    return this.http.get(this.baseUrl+"/icmr/me",this.GetHeader())
  }
  addCatDetails(body){
    return this. http.post(this.baseUrl+"/icmr/medcategoriesdesc",body,this.GetHeader());
  }
  updateCatDetails(body){
    return this.http.put(this.baseUrl+"/icmr/medcategoriesdesc",body,this.GetHeader());
  }
  deleteRow(id){
    return this.http.delete(this.baseUrl+"/icmr/medcategoriesdesc/"+id);
  }
}
