import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-project';
  navBarSema: boolean = true;
  conversion(eventData: { SemaBool: boolean }) {
    this.navBarSema = eventData.SemaBool;
    console.log('Data recieved' + eventData.SemaBool);
  }
}
