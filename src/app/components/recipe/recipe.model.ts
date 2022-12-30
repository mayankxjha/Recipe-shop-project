import {Ingredient} from "../../shared/ingredient.model";

export class Recipe {
  public ingredients: Ingredient[];

  constructor(public name: string, public description: string, public imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
