import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'Hello Hugo!';
}
