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
  recipeId = 0;

  constructor(
    private recipeManagerService: RecipeManagerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.snapshot.params.id;
    this.recipeId = id;
    console.log("ID === ", id);
    if (id) {
      // this.route.data.subscribe((data) => {
      //   this.recipe = data.recipe;
      // });
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
    console.log("IsFav == " + isFavourite + " recipeId " + this.recipeId);
    this.recipeManagerService.updateRecipeList(this.recipeId)
  }
}
