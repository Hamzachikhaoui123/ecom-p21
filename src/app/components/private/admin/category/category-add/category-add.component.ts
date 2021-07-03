import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss', './../../../../../../assets/css/sb-admin-2.css']
})
export class CategoryAddComponent implements OnInit {
  addCategoryForm: FormGroup;
  constructor(private fb: FormBuilder , private categoryService:CategoryService, private router:Router,private toastr: ToastrService) {
    let formContols = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ])
    }
    this.addCategoryForm = this.fb.group(formContols)
  }
  get name() { return this.addCategoryForm.get('name') }

  ngOnInit(): void {

  }
  addCateogry(){
    let data = this.addCategoryForm.value
    this.categoryService.addCategory(data).subscribe(
      res=>{
        this.toastr.success(res.message),
        this.router.navigate(['admin/category/list'])

        
      },
      err=>{
        console.log(err);
        
      }
    )
   

  }

}
