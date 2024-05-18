import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardHoverComponent } from './card-hover/card-hover.component';

const routes: Routes = [
  {
    path: 'card-hover',
    component:CardHoverComponent
   
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
