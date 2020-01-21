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
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { LoggerService } from './services/logger.service';
import { RecipeManagerService } from './recipe-list/recipe-manager.service';
import { RecipeResolver } from './recipe-list/recipe-resolver.service';
import { RecipeCellComponent } from './recipe-cell/recipe-cell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    RecipeListComponent,
    VegNonVegTypeDirective,
    LoginComponent,
    HomeComponent,
    RecipeCellComponent,
    PageNotFoundComponent
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
    MatGridListModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthGuard, AuthService, RecipeResolver, RecipeManagerService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
