import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RecipeManagerService } from '../recipe-list/recipe-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-cell',
  templateUrl: './recipe-cell.component.html',
  styleUrls: ['./recipe-cell.component.scss']
})
export class RecipeCellComponent implements OnInit, OnDestroy {
  @Input() recipe;
  private paramSubs: Subscription;
  recipeId 

  constructor(
    private recipeManagerService: RecipeManagerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.recipeId = id;
    if (id) {
      this.recipe = this.recipeManagerService.getRecipe(id);
      this.paramSubs = this.route.params.subscribe((params) => {
        this.recipe = this.recipeManagerService.getRecipe(params.id);
      });
    } else {
      this.recipe = this.recipeManagerService.getRecipe(0);
    }
  }

  ngOnDestroy() {
    if (this.paramSubs) {
      this.paramSubs.unsubscribe();
    }
  }

  setFavourite(isFavourite: boolean) {
    this.recipeManagerService.updateRecipeList()
  }
}
