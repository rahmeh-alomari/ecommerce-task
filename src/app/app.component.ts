import { Component } from '@angular/core';
import { products } from '../assets/db';
import { IProduct } from './Date/IProduct';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products=products;
  onAddProduct(Product:{ProductName:string,ProductDescription:string,ProductPrice:number,productimage:any})
  {
    console.log("Product",Product)
    this.products.push({
      price: Product.ProductPrice,
      name: Product.ProductName,
      description: Product.ProductDescription,
      id: 0,
      imageUrl: Product.productimage
    })
  }


  onCardClick(product:IProduct)
  {
    console.log("Card clciked");
    console.log(product.description)
  }

}
