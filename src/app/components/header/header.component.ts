import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  @Output() navBarSemaphore = new EventEmitter<{ SemaBool: boolean }>();

  loadRecipes(){
      this.navBarSemaphore.emit({SemaBool: true});
      console.log(this.navBarSemaphore);
    }
    loadShoppingList(){
      this.navBarSemaphore.emit({SemaBool: false});
      console.log(this.navBarSemaphore);
  }
}
