import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { RecipeManagerService } from './recipe-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = []
  recipe: Recipe
  veg: String = "./assets/images/veg.png"
  nonVeg: String = "./assets/images/nonveg.png"
  constructor(private recipeManagerService: RecipeManagerService, private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeManagerService.recipes;
  }

  getRecipeDetail(event, newValue) {
    console.log(newValue);
    this.recipe = newValue;
    // this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
}

}
