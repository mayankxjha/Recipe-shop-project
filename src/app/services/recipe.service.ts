import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../components/recipe/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'testRecipe',
      'testDesc',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png'
    ),
    new Recipe(
      'testRecipe2',
      'testDesc2',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png'
    ),
  ];
  getRecipe() {
    return this.recipes.slice();
  }
  constructor() {
  }
}
