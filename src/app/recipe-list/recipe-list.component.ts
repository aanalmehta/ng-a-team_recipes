import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { RecipeManagerService } from './recipe-manager.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = []
  constructor(private recipeManagerService: RecipeManagerService) { }

  ngOnInit() {
    this.recipes = this.recipeManagerService.recipes;
  }

}
