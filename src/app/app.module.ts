import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import {RecipeComponent} from './components/recipe/recipe.component';
import {RecipeListComponent} from './components/recipe/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './components/recipe/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './components/recipe/recipe-list/recipe-item/recipe-item.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from "./services/shopping-list.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
