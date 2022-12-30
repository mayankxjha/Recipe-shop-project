import {Recipe} from '../recipe.model';
import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  constructor(private recService: RecipeService) {
  }
  @Input() recipe: Recipe;
  ingToAdd: Ingredient[];
  moveToShoppingList(){
    this.recService.addIngToSL(this.recipe.ingredients);
  }
  ngOnInit() {
  }
}
