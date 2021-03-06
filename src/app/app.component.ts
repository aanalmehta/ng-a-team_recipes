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
      description: "It is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun."
    },
    {
      name: 'Italian Pasta',
      chef: 'JM',
      image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      type: 'v',
      description: "It is a type of Italian food typically made from an unleavened dough of durum wheat flour (semolina)."
    },
    {
      name: 'Chicken Maggie',
      chef: 'Nisha Madhulika',
      image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      type: 'nv',
      description: "It  is an international brand of seasonings, instant soups, and noodles that originated in Switzerland in late 19th century."
    },
    {
      name: 'Veg. Pulav',
      chef: 'Juhi Parmar',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      type: 'v',
      description: "It is a basic Indian style rice pilaf that is aromatic, delicious, healthy & super quick to make for a meal."
    },
    {
      name: 'Falafel',
      chef: 'Dhara Patel',
      image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      type: 'v',
      description: "It is a basic American style rice pilaf that is aromatic, delicious, healthy & super quick to make for a meal."
    },
    {
      name: 'Garlic Bread',
      chef: 'Kinjal Dhamat',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1547&q=80',
      type: 'v',
      description: "It is a basic Indian style aata bread that is aromatic, delicious, healthy & super quick to make for a meal."
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
