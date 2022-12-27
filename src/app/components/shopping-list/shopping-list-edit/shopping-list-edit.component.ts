import { Ingredient } from './../../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') input1: ElementRef;
  @ViewChild('amountInput') input2: ElementRef;
  @Output() emittedIngredient = new EventEmitter<Ingredient>();

  addIngredient() {
    const ingName = this.input1.nativeElement.value;
    const ingAmount = this.input2.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmount);
    this.emittedIngredient.emit(newIng);
  }
}
