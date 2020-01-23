import { Component, OnInit } from '@angular/core';
import { RecipeManagerService } from '../recipe-list/recipe-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes = []
  constructor(private recipeManagerService: RecipeManagerService) { }

  ngOnInit() {
    console.log('====Home onInit');
    
    this.recipes = this.recipeManagerService.getFavouriteRecipes();
  }

}
