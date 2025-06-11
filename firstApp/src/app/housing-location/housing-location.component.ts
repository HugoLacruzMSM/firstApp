import {Component, input} from '@angular/core';
import {HousingLocationInfo} from '../housinglocationInfo';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [
    RouterLink
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  housingLocation = input.required<HousingLocationInfo>()

}
