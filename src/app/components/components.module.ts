import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CardHoverComponent } from './card-hover/card-hover.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';


@NgModule({
  declarations: [
    CardHoverComponent,
    ProjectGalleryComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
