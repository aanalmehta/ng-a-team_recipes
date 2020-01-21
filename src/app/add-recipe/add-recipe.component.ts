import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../model/Recipe';
import {  } from 'events';
import { RecipeManagerService } from '../recipe-list/recipe-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  @Output()
  recipeAdded: EventEmitter<Recipe> = new EventEmitter();
  recipe: Recipe = null;

  constructor(private recipeManagerService: RecipeManagerService, private router:Router) { }

  ngOnInit() {
  }

  addRecipe(recipe) {
    recipe = {
      name : recipe.name,
      chef : recipe.chef,
      type: "v",
      image : recipe.image,
      description : recipe.description,
      isFavourite: false
    }
    this.recipeManagerService.addRecipe(recipe)
    this.router.navigateByUrl('/recipes');
  }
}
