import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingLocationInfo} from '../housinglocationInfo';
import {HousingService} from '../housing.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Observable, switchMap} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  service = inject(HousingService);
  housingLocation!: Observable<HousingLocationInfo>;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id'])
    this.getHousingLocationById(this.housingLocationId)
  }

  submitApplication() {
    this.service.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }


  getHousingLocationById(id: number) {

    this.housingLocation = this.service.getAllHousingLocations().pipe(
      switchMap((response) => response.filter((house) => house.id == id))
    )
  }

}
