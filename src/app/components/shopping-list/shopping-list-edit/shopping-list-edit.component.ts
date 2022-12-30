import { Ingredient } from '../../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {ShoppingListService} from "../../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  constructor(private shoppingListService: ShoppingListService) {
  }
  @ViewChild('nameInput') input1: ElementRef;
  @ViewChild('amountInput') input2: ElementRef;

  addIngredient() {
    const ingName = this.input1.nativeElement.value;
    const ingAmount = this.input2.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmount);
    this.shoppingListService.ingredientEmit.emit(newIng);
  }
}
