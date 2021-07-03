import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerUserUrl="http://localhost:3000/user/register";
  private getallUserUrl="http://localhost:3000/user/all"
  private deleteUserUrl="http://localhost:3000/user/delete/"
  private loginUserUrl ="http://localhost:3000/user/login"
  constructor(private http:HttpClient) { }
  registerUser(user:any){
    return this.http.post<any>(this.registerUserUrl,user);
  }
  getUserAll(){
    return this.http.get<any>(this.getallUserUrl)
  }
  deleteUser(id:String){
    return this.http.delete<any>(this.deleteUserUrl+id)
  }
  loginAdmin(user:any){
    return this.http.post<any>(this.loginUserUrl,user);
  }
  isLoggedIn(){
    let token = localStorage.getItem("myToken");
    if(token){
      return true ;
    }
    else{
      return false;
    }
  }
}
