import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { CategoryListComponent } from './components/private/admin/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { ProductListComponent } from './components/private/admin/product/product-list/product-list.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';
import { ClientListComponent } from './components/private/admin/client/client-list/client-list.component';
import { OrderListComponent } from './components/private/admin/order/order-list/order-list.component';
import { MyOrdersComponent } from './components/private/client/order/my-orders/my-orders.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { BottombarComponent } from './components/private/shared/bottombar/bottombar.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { OrderDetailsComponent } from './components/private/admin/order/order-details/order-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ClientListComponent,
    OrderListComponent,
    MyOrdersComponent,
    SidebarComponent,
    TopbarComponent,
   
    BottombarComponent,
    DashboardComponent,
    OrderDetailsComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
