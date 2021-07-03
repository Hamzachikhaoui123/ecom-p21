import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./../../../../assets/css/bootstrap.css','./../../../../assets/css/shop-homepage.css']
})
export class HomeComponent implements OnInit {
  categorylist:any[] = []
  productlist: any[] = []

  constructor(private categoryService:CategoryService,private productService:ProductService) { }

  ngOnInit(): void {
    this.categoryService.getCateogryAll().subscribe(
      res=>{
        this.categorylist = res
      },
      err=>{
        console.log(err);
        
      }
    )
    this.productService.getProductAll().subscribe(
      res => {
        this.productlist = res
      },
      err => {
        console.log(err);

      }
    )
  }

}
