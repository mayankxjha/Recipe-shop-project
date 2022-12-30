import {Recipe} from './../../recipe.model';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {RecipeService} from "../../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  constructor(private recipeService: RecipeService) {
  }

  @Input() recElement: Recipe;

  loadDesc() {
    this.recipeService.recipeSelected.emit(this.recElement);
  }
}
