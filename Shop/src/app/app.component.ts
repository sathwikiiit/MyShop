import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ServeProductsService } from './serve-products.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListComponent, RouterOutlet,RouterModule,CommonModule,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ServeProductsService]
})

export class AppComponent implements OnInit{

  title = 'Shop';
  items:number[]
  
  
  constructor(public service:ServeProductsService){
    this.items=[];
  }
  ngOnInit(): void {
    this.items=this.service.cart
  }

}
