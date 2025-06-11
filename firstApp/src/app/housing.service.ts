import {inject, Injectable} from '@angular/core';
import {HousingLocationInfo} from './housinglocationInfo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  private httpClient: HttpClient = inject(HttpClient)

  getAllHousingLocations(): Observable<HousingLocationInfo[]> {
    return this.httpClient.get<HousingLocationInfo[]>(this.url)
  }


  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
