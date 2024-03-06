import { Component, OnInit } from '@angular/core';
import { HouseModel } from '../house.model';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houseList: HouseModel[] = [];

  ngOnInit(): void {
    
    this.houseList = [
      new HouseModel('Acme Fresh Start Housing', 'assets/4.jpg', 'Chicago,IL', 'Learn More >'),
      new HouseModel('A113 Transitional Housing', 'assets/5.jpg', 'Santa Monica, CA', 'Learn More >'),
      new HouseModel('Warm Beds Housing Support', 'assets/6.jpg', 'Juneau, AK', 'Learn More >'),
      new HouseModel('Homesteady Housing', 'assets/3.jpg', 'Chicago, IL', 'Learn More >'),
      new HouseModel('Happy Homes Group', 'assets/7.jpg', 'Gary, IN', 'Learn More >'),
      new HouseModel('Hopeful Apartment Group', 'assets/8.jpg', 'Oakland, CA', 'Learn More >'),
      new HouseModel('Seriously Safe Towns', 'assets/9.jpg', 'Oakland, CA', 'Learn More >'),
      new HouseModel('Hopeful Housing Solutions', 'assets/10.jpg', 'Oakland, CA', 'Learn More >'),
      new HouseModel('Seriously Safe Towns', 'assets/1.jpg', 'Oakland, CA', 'Learn More >'),
      new HouseModel('Capital Safe Towns', 'assets/2.jpg', 'Portland, OR', 'Learn More >'),
      
    ];
  }
}

