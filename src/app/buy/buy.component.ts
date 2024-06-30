import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ServeProductsService } from '../serve-products.service';
import { NewItem } from '../new-item';
import { CartitemComponent } from '../cartitem/cartitem.component';
import { FormsModule } from '@angular/forms';
import { Address } from './address';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [CommonModule,CartitemComponent,FormsModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent implements OnInit {
  @Input()
  id!: number;
  items!: NewItem[];
  Address!: Address;
  
  constructor(private service: ServeProductsService){
  
    if (this.id!=0){
      this.items=[this.service.getById(this.id)]
    } else {
      this.items=this.service.getfiltered()
    }
  }
  ngOnInit(): void {
    
}
}