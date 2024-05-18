import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardHoverComponent } from './card-hover/card-hover.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch:'full'
  },
  {
    path: 'gallery',
    component:ProjectGalleryComponent
    
  },
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
