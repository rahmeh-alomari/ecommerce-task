import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './Compnenets/list-products/list-products.component';
import { AddProductsComponent } from './Compnenets/add-products/add-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    AddProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
