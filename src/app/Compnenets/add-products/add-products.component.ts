import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  newProductName = '';
  newProductDescription ='';
  newProductPrice=0;
  productImage = '';
  defaultImage: string = 'assets/images/photo.webp';

    @Output() Products =new EventEmitter<{ProductName:string,ProductDescription:string,ProductPrice:number,productimage:any}>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddBruduct() {
    const imageToUse = this.productImage ? this.productImage : this.defaultImage;

    this.Products.emit({
      ProductName: this.newProductName,
      ProductDescription: this.newProductDescription,
      ProductPrice: this.newProductPrice,
      productimage:imageToUse,
    });
   
  }

}
