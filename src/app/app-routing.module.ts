import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';


const routes: Routes = [
  { path:'', redirectTo:'products', pathMatch:'full'},
  { path:'products', component:ProductListComponent },
  { path: 'proucts/:id', component: ProductDetailsComponent },
  { path: 'create', component:ProductCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
