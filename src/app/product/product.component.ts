import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServeProductsService } from '../serve-products.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  productid = -1;
  product: any;
  constructor(private service:ServeProductsService) {
  }
  ngOnInit(): void {
    this.productid = Number(this.route.snapshot.params['id']);
    this.product! = this.service.getById(this.productid);    
  }
  Add(n:number){
    if (!this.service.cart.includes(this.productid)){
    this.service.addtocart(this.productid);
    }
  }
}
