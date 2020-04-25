import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MixDesignComponent } from './mix-design.component';


const routes: Routes = [
  {
    path: "",
    component: MixDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MixDesignRoutingModule { }