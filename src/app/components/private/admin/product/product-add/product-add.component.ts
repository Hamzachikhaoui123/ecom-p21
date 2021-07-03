import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss', './../../../../../../assets/css/sb-admin-2.css']
})
export class ProductAddComponent implements OnInit {

  public productForm: FormGroup;
  public categorylist: any[] = []
  public imageUrl: String = "./../../../../../../assets/image/Subscriber-rafiki.png"
  public imageFile!: File //5taer variable ma3ndha hata vauler ! bech na3tha valeur


  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router, private cateogryService: CategoryService,private toastr:ToastrService) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
      ]),
      image: new FormControl('', [
        Validators.required,

      ]),
      categoryId: new FormControl('', [
        Validators.required,

      ]),
    }
    this.productForm = this.fb.group(formControls)

  }
  get name() { return this.productForm.get("name") }
  get description() { return this.productForm.get("description") }
  get price() { return this.productForm.get("price") }
  get image() { return this.productForm.get("image") }
  get categoryId() { return this.productForm.get("categoryId") }





  ngOnInit(): void {
    this.cateogryService.getCateogryAll().subscribe(
      res => {
        this.categorylist = res
      },
      err => {
        console.log(err);

      }
    )
  }
  onFileSelect(event: any) {
    let reader = new FileReader //deux classe fi typeScript t5alinia na9ra fiche
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event) => this.imageUrl = event.target?.result?.toString()!
    this.imageFile = (event).target.files[0]
  }
  addProduct() {
    let data = this.productForm.value;
    const formData=new FormData()


    formData.append("name", 
data.name
 )
    formData.append("description", data.description )
    formData.append("price", data.price )
    formData.append("categoryId", data.categoryId )
    formData.append("image",this.imageFile)

    this.productService.addProduct(formData).subscribe(
      res => {
        this.toastr.success(res.message);

        this.router.navigate(['/admin/product/list']);
      },
      err => {
        console.log(err);

      }
    )

  }}
