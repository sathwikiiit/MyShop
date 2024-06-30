import { Component, Input } from '@angular/core';
import { NewItem } from '../new-item';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() newitem!:NewItem;
}
