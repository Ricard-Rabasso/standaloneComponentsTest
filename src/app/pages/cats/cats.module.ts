import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats.component';
import { CatsRoutingModule } from './cats.routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CatsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CatsRoutingModule,
  ],
  exports: [CatsComponent]
})
export class CatsModule { }
