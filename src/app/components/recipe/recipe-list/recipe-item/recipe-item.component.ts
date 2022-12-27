import { Recipe } from './../../recipe.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recElement: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  loadDesc() {
    this.recipeSelected.emit();
  }
}
