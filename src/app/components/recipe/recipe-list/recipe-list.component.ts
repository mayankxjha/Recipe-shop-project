import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'test',
      'more test',
      'https://i.pcmag.com/imagery/articles/00Cx7vFIetxCuKxQeqPf8mi-66.fit_lim.size_1050x.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
