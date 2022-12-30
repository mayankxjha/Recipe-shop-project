import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {RecipeService} from "./recipe.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService implements OnInit {

  ingredientEmit = new EventEmitter<Ingredient>()
  ingredientsEmit = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 5),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIng(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsEmit.emit();
  }

  constructor() {
  }

  ngOnInit() {

  }
}
