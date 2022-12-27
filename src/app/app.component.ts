import { Component } from '@angular/core';
import { Recipe } from './components/recipe/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-project';
  navBarSema: boolean = true;
  conversion(eventData: { SemaBool: boolean }) {
    console.log('Data recieved ' + eventData.SemaBool);
    this.navBarSema = eventData.SemaBool;
  }
}
