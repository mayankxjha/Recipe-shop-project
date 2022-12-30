import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Recipe} from "../components/recipe/recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {
  recipeSelected = new EventEmitter<Recipe>();
  recipeIngSelected = new EventEmitter<Ingredient[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'testRecipe',
      'testDesc',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'testRecipe2',
      'testDesc2',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png',
      [new Ingredient('Buns', 2), new Ingredient('meat', 2)]
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }

  addIngToSL(ingredients: Ingredient[]){
    this.sLService.addIng(ingredients);
  }
  constructor(private sLService: ShoppingListService) {
  }

  ngOnInit() {

  }
}
