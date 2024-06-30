import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ServeProductsService } from '../serve-products.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit{
  @Input() items:number[]=[];

  title="MY SHOP"
  disabled=false;
  constructor(private service:ServeProductsService){}
  ngOnInit(): void {
    this.items=this.service.cart
  }

}
