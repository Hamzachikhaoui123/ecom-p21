import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss','./../../../../../../assets/css/sb-admin-2.css']
})
export class OrderListComponent implements OnInit {
  orderList :any[]=[]

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrderAll().subscribe(
      res=>{
        this.orderList = res
      },
      err=>{
        console.log(err);
        
      }
    )
  }

}
