
import { Component, Input } from '@angular/core';
import { HouseModel } from '../house.model';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent {
  @Input() house!: HouseModel; 
}