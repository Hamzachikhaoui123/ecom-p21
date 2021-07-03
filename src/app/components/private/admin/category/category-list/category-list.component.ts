import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss','./../../../../../../assets/css/sb-admin-2.css']
})
export class CategoryListComponent implements OnInit {
  categorylist:any[] = []
  constructor(private categoryService:CategoryService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.categoryService.getCateogryAll().subscribe(
      res=>{
        this.categorylist = res
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  delete(category: any) {
    let index = this.categorylist.indexOf(category);
    this.categorylist.splice(index, 1);
    this.categoryService.deleteCateogry(category._id).subscribe(

      res => {
        this.toastr.error(res.message)},
        err => {
        console.log(err);

      }
    )
  }
  }
