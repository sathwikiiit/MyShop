import {Routes} from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';

export const routes: Routes = [
    {
      path: '',
      component: ListComponent,
    },
    {
      path: 'product/:id',
      component: ProductComponent,
    },
    {
      path: 'cart',
      component: CartComponent,
    },
    {
      path: 'buy/:id',
      component:BuyComponent,
    }
];

export default routes
