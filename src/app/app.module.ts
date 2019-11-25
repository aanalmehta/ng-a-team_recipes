import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTextareaAutosize, MatSelect, MatOptionModule, MatSelectModule, MatCardModule, MatToolbarModule, MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatButtonModule, MatListModule, MatIconModule, MatCardAvatar, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { VegNonVegTypeDirective } from './directives/VegNonVegTypeDirective';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    RecipeListComponent,
    VegNonVegTypeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
