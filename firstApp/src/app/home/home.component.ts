import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {AsyncPipe, NgForOf} from '@angular/common';
import {HousingLocationInfo} from '../housinglocationInfo';
import {HousingService} from '../housing.service';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    HousingLocationComponent,
    NgForOf,
    AsyncPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingLocationList: Observable<HousingLocationInfo[]>;
  housingService: HousingService = inject(HousingService)
  filteredLocationList!: Observable<HousingLocationInfo[]>;

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
    this.filteredLocationList = this.housingLocationList
  }

  filterResults(text: string) {
    this.filteredLocationList = this.housingLocationList
      .pipe(map((value) => value.filter((value1) => value1.city.toLowerCase().includes(text.toLowerCase())
      )));
    
  }
}
