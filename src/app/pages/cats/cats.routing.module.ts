import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CatsComponent } from "./cats.component";

const routes: Routes = [
  {
    path: '',
    component: CatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule { }