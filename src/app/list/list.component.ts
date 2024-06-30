import { Component, OnInit, inject } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { NewItem } from '../new-item';
import { ServeProductsService } from '../serve-products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
  
export class ListComponent implements OnInit{
  newitemlist: NewItem[]=[];
  constructor(private service:ServeProductsService) {
  }
  
  ngOnInit(): void {
    this.newitemlist=this.service.getAllproducts()    
  }
}
