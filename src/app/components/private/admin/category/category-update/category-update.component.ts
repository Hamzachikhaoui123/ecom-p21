import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss', './../../../../../../assets/css/sb-admin-2.css']
})
export class CategoryUpdateComponent implements OnInit {
  updateCategoryForm: FormGroup;
  constructor(private fb: FormBuilder,private rout:ActivatedRoute,private categoryService:CategoryService,private router:Router,private toastr: ToastrService) {
    let formContols = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ])
    }
    this.updateCategoryForm = this.fb.group(formContols)
  }
  get name() { return this.updateCategoryForm.get('name') }

  ngOnInit(): void {
    let idCategory = this.rout.snapshot.params.id;
    this.categoryService.getOneCategory(idCategory).subscribe(
      res=>{
        this.updateCategoryForm.patchValue({
          name:res.name
        })
      }
    )
    
  }
  updateCategory(){
    let data = this.updateCategoryForm.value;
    let idCategory = this.rout.snapshot.params.id;
 
    this.categoryService.updateCategory(data,idCategory).subscribe(
      res => {
        this.toastr.warning(res.message);

        this.router.navigate(['/admin/category/list']);

      },
      err => {
        console.log(err);

      }
    )
  }
  }
  

