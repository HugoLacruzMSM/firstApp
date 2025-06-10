import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {NgForOf} from '@angular/common';
import {HousingLocationInfo} from '../housinglocationInfo';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [
    HousingLocationComponent,
    NgForOf,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService)

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
  }

}
