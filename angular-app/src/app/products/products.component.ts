import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsListComponent {
  pageTitle: string = "Product List Page";
  showImage: string= "https://picsum.photos/200";
  imageUrl: string= "https://picsum.photos/200";
  productName: string= "Product List"

  imageWidth:number = 80;
  imageMargin:number = 10;
}
