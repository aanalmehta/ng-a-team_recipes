import { Recipe } from './../model/Recipe';
import { LoggerService } from './../services/logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeManagerService {
  favRecipes = [];
  recipes = [
    {
      name: 'Burger',
      chef: 'Ranveer Brar',
      image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      type: 'nv',
      description: "It is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
      isFavourite: true
    },
    {
      name: 'Italian Pasta',
      chef: 'JM',
      image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      type: 'v',
      description: "It is a type of Italian food typically made from an unleavened dough of durum wheat flour (semolina)."
      ,
      isFavourite: false
    },
    {
      name: 'Chicken Maggie',
      chef: 'Nisha Madhulika',
      image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      type: 'nv',
      description: "It  is an international brand of seasonings, instant soups, and noodles that originated in Switzerland in late 19th century.",
      isFavourite: true
    },
    {
      name: 'Veg. Pulav',
      chef: 'Juhi Parmar',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      type: 'v',
      description: "It is a basic Indian style rice pilaf that is aromatic, delicious, healthy & super quick to make for a meal.",
      isFavourite: false
    },
    {
      name: 'Falafel',
      chef: 'Dhara Patel',
      image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      type: 'v',
      description: "It is a basic American style rice pilaf that is aromatic, delicious, healthy & super quick to make for a meal.",
      isFavourite: true
    },
    {
      name: 'Garlic Bread',
      chef: 'Kinjal Dhamat',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1547&q=80',
      type: 'v',
      description: "It is a basic Indian style aata bread that is aromatic, delicious, healthy & super quick to make for a meal.",
      isFavourite: true
    },
  ];

  constructor(private loggingService: LoggerService) { }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.loggingService.log('recipe added');
  }

  getRecipe(byId: number) {
    return this.recipes[byId];
  }

  getFavouriteRecipes() {
    for (var i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].isFavourite)
        this.favRecipes.push(this.recipes[i])
    }
    return this.favRecipes
  }

  updateRecipeList(id) {
    var isFav = this.recipes[id].isFavourite
    this.recipes[id].isFavourite = !isFav
    if (isFav)
      this.favRecipes.push(this.recipes[id])
    else this.favRecipes.splice(id, 1)
  }
}
