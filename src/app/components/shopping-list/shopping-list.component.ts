import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 5),
  ];
  addedIngredient(Info: Ingredient) {
    this.ingredients.push(Info);
  }
}
