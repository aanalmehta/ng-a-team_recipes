import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes;

  constructor() { }

  ngOnInit() {
  }

}
