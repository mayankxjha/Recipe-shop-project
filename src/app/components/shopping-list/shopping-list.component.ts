import {Component, OnInit} from '@angular/core';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
  }
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientEmit.subscribe((ing: Ingredient) => {
      this.ingredients.push(ing);
    })
  }
}
