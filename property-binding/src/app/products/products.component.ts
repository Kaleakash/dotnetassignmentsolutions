import { Component } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponents {
   pageTitle: string = "Product List Page"; 
   imageWidth:number = 80; 
   imageMargin:number = 10; 
   showImage:boolean = false; 
   products:Array<Product>=[
    new Product("https://i.pinimg.com/236x/d9/b9/49/d9b9490af419f70a300d4552d6d737af.jpg","Leaf Rake","GDN-0011","March 19, 2016",19.95,3.5),
    new Product("https://i.pinimg.com/236x/1c/46/9d/1c469d4c102b6aa7f89a8c1b7c7cc797.jpg","Garden Cart","GDN-0023","March 18, 2016",32.99,4.2),
    new Product("https://i.pinimg.com/236x/38/13/43/38134365cf2f9a2e4e21ae3b1c7aa158.jpg","Hammer","TBX-0048","March 21, 2016",8.9,4.8),
    new Product("https://i.pinimg.com/236x/0d/ae/ed/0daeedbf7a3c6e22a35623a695a8c31b.jpg","Saw","TBX-0022","March 15, 2016",11.55,3.7),
    new Product("https://i.pinimg.com/236x/43/e7/82/43e78206fa3c28e1bfc8f92ba349052d.jpg","Video Game Controller","GMG-0042","October 15, 2015",35.95,4.6),
  ]
}
