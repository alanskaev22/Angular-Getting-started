import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductModule { }
