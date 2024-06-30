import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewItem } from '../new-item';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cartitem',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './cartitem.component.html',
  styleUrl: './cartitem.component.css'
})
export class CartitemComponent implements OnInit,OnChanges{
  @Input() item!: NewItem;
  constructor(){
  }
  ngOnInit(): void {
    this.item=this.item
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.item=this.item
  }
}
