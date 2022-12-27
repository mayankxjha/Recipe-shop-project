import { Recipe } from './recipe.model';
import { Component } from '@angular/core';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  selectedRecipe: Recipe;
}
