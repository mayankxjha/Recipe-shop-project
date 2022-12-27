import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed : boolean;
  @Output() navBarSemaphore = new EventEmitter<{ SemaBool: boolean }>();

  loadRecipes(){
      this.navBarSemaphore.emit({SemaBool: true});
    }
    loadShoppingList(){
      this.navBarSemaphore.emit({SemaBool: false});
  }
}
