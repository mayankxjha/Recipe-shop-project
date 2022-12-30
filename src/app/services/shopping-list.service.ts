import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientEmit = new EventEmitter<Ingredient>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 5),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  constructor() {
  }
}
