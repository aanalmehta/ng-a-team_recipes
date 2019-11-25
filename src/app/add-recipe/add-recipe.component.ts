import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../model/Recipe';
import {  } from 'events';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  @Output()
  recipeAdded: EventEmitter<Recipe> = new EventEmitter();
  recipe: Recipe = null;

  constructor() { }

  ngOnInit() {
  }

  addRecipe(recipe) {
    this.recipe = {
      name : recipe.name,
      chef : recipe.chef,
      type: "v",
      image : recipe.image,
      description : recipe.description
    }
    this.recipeAdded.emit(this.recipe);
  }
}
