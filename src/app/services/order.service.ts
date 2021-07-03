import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private getOrderAllUrl="http://localhost:3000/order/all"

  constructor(private http:HttpClient) { }
  getOrderAll(){
    return this.http.get<any>(this.getOrderAllUrl)
  }
}
