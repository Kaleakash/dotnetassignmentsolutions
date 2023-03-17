import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponents} from './products/products.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponents,
    ConvertToSpacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
