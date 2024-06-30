import { Injectable } from '@angular/core';
import { NewItem } from './new-item';

@Injectable({
  providedIn: 'root'
})
export class ServeProductsService {
  newitemlist:NewItem[];
  dummy:string;
  cart:number[];
  
  constructor() { 
    this.dummy="PngItem.png";
    this.newitemlist =[
      {
        SNo:1,
        Name:"Chair",
        Price:999.99,
        path:this.dummy,
      },
      {
        SNo:2,
        Name:"Cupboard",
        Price:3999.99,
        path:this.dummy,
      },
      {
        SNo:3,
        Name:"TV stand",
        Price:549.99,
        path:this.dummy,
      },
      {
        SNo:4,
        Name:"Table",
        Price:699.99,
        path:this.dummy,
      },
      {
        SNo:5,
        Name:"Dining Chair",
        Price:499.99,
        path:this.dummy,
      },
      {
        SNo:6,
        Name:"Door",
        Price:7000,
        path:this.dummy,
      },
      {
        SNo:7,
        Name:"Dressing Stand",
        Price:800.99,
        path:this.dummy,
      },
      {
        SNo:8,
        Name:"Cart",
        Price:299.99,
        path:this.dummy,
      },
    ];
    this.cart = [];
    }
    
  getAllproducts(): NewItem[] {
    return this.newitemlist;
  };
  getById(id: number): any {
    return this.newitemlist.find((newitem) => newitem.SNo === id);
  }
  addtocart(id:number){
    this.cart.push(id)
    this.cart=this.cart
    console.log(this.cart)
  }
  getfiltered(): any {
    let filtered: NewItem[] = [];
    this.cart.forEach((element: number) => {filtered=[...filtered,this.getById(element)]})
    return filtered;
  }
}
