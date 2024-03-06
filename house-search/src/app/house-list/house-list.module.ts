// house-list.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseListComponent } from './house-list.component';
import { HouseDetailsComponent } from '../house-details/house-details.component'; // Make sure to use the correct path

@NgModule({
  declarations: [HouseListComponent, HouseDetailsComponent],
  imports: [CommonModule],
  exports: [HouseListComponent],
})
export class HouseListModule {}
