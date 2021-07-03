import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss', './../../../../../../assets/css/sb-admin-2.css']
})
export class ProductListComponent implements OnInit {
  productlist: any[] = []
  constructor(private productService: ProductService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.productService.getProductAll().subscribe(
      res => {
        this.productlist = res
      },
      err => {
        console.log(err);

      }
    )
  }
  delete(p: any) {
    let index = this.productlist.indexOf(p);
    this.productlist.splice(index, 1);
    this.productService.deleteProduct(p.product._id).subscribe(
      res => {
        this.toastr.error(res.message);
        
      },
      err => {
        console.log(err);

      }
    )
  }
}


