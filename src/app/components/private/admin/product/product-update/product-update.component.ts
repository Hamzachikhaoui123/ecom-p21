import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss', './../../../../../../assets/css/sb-admin-2.css']
})
export class ProductUpdateComponent implements OnInit {
  public categorylist: any[] = []
  public updateProductForm: FormGroup;
  public imageUrl: String = "./../../../../../../assets/image/Subscriber-rafiki.png"
  public imageFile!: File
  constructor(private fb: FormBuilder, private categoryService: CategoryService, private productService: ProductService, private router: Router, private rout: ActivatedRoute, private toastr: ToastrService) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
      ])
      , image: new FormControl('', [
        Validators.required,

      ]),
      categoryId: new FormControl('', [
        Validators.required,

      ]),
    }
    this.updateProductForm = this.fb.group(formControls)

  }
  get name() { return this.updateProductForm.get("name") }
  get description() { return this.updateProductForm.get("description") }
  get price() { return this.updateProductForm.get("price") }
  get image() { return this.updateProductForm.get("image") }
  get categoryId() { return this.updateProductForm.get("categoryId") }






  ngOnInit(): void {
    let idProduct = this.rout.snapshot.params.id;
    this.productService.getOneProduct(idProduct).subscribe(
      res => {
        this.updateProductForm.patchValue({
          name: res.name,
          description: res.description,
          price: res.price,
          

        })
      },
      err => {
        console.log(err);

      }

    )
    this.categoryService.getCateogryAll().subscribe(
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
  updateProduct() {
    let data = this.updateProductForm.value
    let idProduct = this.rout.snapshot.params.id;
    const formData = new FormData()


    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", data.price)
    formData.append("categoryId", data.categoryId)
    formData.append("image", this.imageFile)

    this.productService.updateProduct(formData,idProduct).subscribe(
      res => {
        this.toastr.success(res.message);

        this.router.navigate(['/admin/product/list']);
      },
      err => {
        console.log(err);

      }
    )



  }
}
