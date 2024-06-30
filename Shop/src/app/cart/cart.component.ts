import { Component} from '@angular/core';
import { ServeProductsService } from '../serve-products.service';
import { NewItem } from '../new-item';
import { CommonModule } from '@angular/common';
import { CartitemComponent } from '../cartitem/cartitem.component';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartitemComponent,CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  newitemlist: NewItem[]=[];
  disabled!: boolean;
  constructor(private service:ServeProductsService) {
  }
  
  ngOnInit(): void {
    this.newitemlist=this.service.getfiltered()    
    this.disabled=this.newitemlist.length>0 ?  true:false ;
  }
}
