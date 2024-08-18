import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Date/IProduct';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  @Input() product:IProduct

  constructor() { }

  ngOnInit(): void {
    console.log("product",this.product)
  }

}
