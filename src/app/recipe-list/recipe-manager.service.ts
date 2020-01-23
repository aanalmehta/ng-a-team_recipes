import { Recipe } from './../model/Recipe';
import { LoggerService } from './../services/logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeManagerService {
  favRecipes = [];
  recipeId = 0
  recipes = [
    {
      name: 'Mag bhaat',
      chef: 'Kinjal Dhamat',
      image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      type: 'v',
      description: "It is a Indian food consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
      isFavourite: true
    },
    {
      name: 'Italian Pasta',
      chef: 'Jeet Raval',
      image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      type: 'v',
      description: "It is a type of Italian food typically made from an unleavened dough of durum wheat flour (semolina)."
      ,
      isFavourite: false
    },
    {
      name: 'Chicken Maggie',
      chef: 'Juhi Parmar',
      image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      type: 'nv',
      description: "It  is an international brand of seasonings, instant soups, and noodles that originated in Switzerland in late 19th century.",
      isFavourite: true
    },
    {
      name: 'Falafel',
      chef: 'Rinkal Gohel',
      image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      type: 'v',
      description: "It is a basic American style rice pilaf that is aromatic, delicious, healthy & super quick to make for a meal.",
      isFavourite: true
    }
  ];

  constructor(private loggingService: LoggerService) { }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.loggingService.log('recipe added');
  }

  getRecipe(byId) {
    this.recipeId = byId
    return this.recipes[byId];
  }

  getFavouriteRecipes() {
    this.favRecipes = []
    for (var i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].isFavourite)
        this.favRecipes.push(this.recipes[i])
    }
    return this.favRecipes
  }

  updateRecipeList() {
    var isFav = this.recipes[this.recipeId].isFavourite
    this.recipes[this.recipeId].isFavourite = !isFav
    if (isFav)
      this.favRecipes.push(this.recipes[this.recipeId])
    else this.favRecipes.splice(this.recipeId, 1)
  }
}
