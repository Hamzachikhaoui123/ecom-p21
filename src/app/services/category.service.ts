import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private addCategoryUrl = "http://localhost:3000/category/add";
  private getAllCategoryUrl = "http://localhost:3000/category/all";
  private deleteCategoryUrl = "http://localhost:3000/category/delete/"
  private updateCategoryUrl = "http://localhost:3000/category/update-info/"
  private getOneCategoryUrl = "http://localhost:3000/category/one/"
  constructor(private http: HttpClient) {

  }
  addCategory(category: any) {
    return this.http.post<any>(this.addCategoryUrl, category);
  }
  getCateogryAll() {
    return this.http.get<any>(this.getAllCategoryUrl);
  }
  deleteCateogry(id: String) {
    return this.http.delete<any>(this.deleteCategoryUrl + id)
  }
  updateCategory(category: any, id: String) {
    return this.http.patch<any>(this.updateCategoryUrl + id, category)
  }
  getOneCategory(id: String) {
    return this.http.get<any>(this.getOneCategoryUrl + id)
  }
}
