import { Component } from '@angular/core';
import { Recipe } from './model/Recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a-team-recipes';
  isDetailsSelected = true;

  recipes = [
    {
      name: 'Burger',
      chef: 'Ranveer Brar',
      image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      type: 'nv',
      description: ""
    },
    {
      name: 'Italian Pasta',
      chef: 'JM',
      image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      type: 'v',
      description: ""
    },
    {
      name: 'Chicken Maggie',
      chef: 'Nisha Madhulika',
      image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      type: 'nv',
      description: ""
    },
    {
      name: 'Veg. Pulav',
      chef: 'Tarla Dalal',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      type: 'v',
      description: ""
    },
    {
      name: 'Veg. Pulav',
      chef: 'Tarla Dalal',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      type: 'v',
      description: ""
    },
    {
      name: 'Veg. Pulav',
      chef: 'Tarla Dalal',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      type: 'v',
      description: ""
    },
  ];

  selectedTab(selectedTab: Number) {
    console.log("AANAL"+selectedTab);
    this.isDetailsSelected = (selectedTab == 1) ? true : false;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push({name: recipe.name, chef: recipe.chef, image: recipe.image, type: recipe.type,description: recipe.description})
  }
}
