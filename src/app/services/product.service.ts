import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private addproductUrl = "http://localhost:3000/product/add";
  private updateproductUrl = "http://localhost:3000/product/update-info/"
  private deleteProductUrl = "http://localhost:3000/product/delete/"
  private getProductAllUrl = "http://localhost:3000/product/all"
  private getOneProductUrl = "http://localhost:3000/product/one/"

  constructor(private http: HttpClient) {

  }
  addProduct(product: any) {
    return this.http.post<any>(this.addproductUrl, product);
  }
  updateProduct(product: any, id: String) {
   

    return this.http.patch<any>(this.updateproductUrl + id, product);

  }
  deleteProduct(id: String) {
    return this.http.delete<any>(this.deleteProductUrl + id)
  }
  getProductAll() {
    return this.http.get<any>(this.getProductAllUrl)
  }
  getOneProduct(id: String) {
    return this.http.get<any>(this.getOneProductUrl + id)
  }
}
