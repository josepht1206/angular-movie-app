import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxLabelModule } from '@aposin/ng-aquila/base';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxPageSearchModule } from '@aposin/ng-aquila/page-search';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxTabsModule } from '@aposin/ng-aquila/tabs';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: SearchBarComponent },
  { path: 'favorites', component: FavoriteMoviesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieListComponent,
    FavoriteMoviesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NxInputModule,
    NxLabelModule,
    NxButtonModule,
    NxCardModule,
    NxDropdownModule,
    NxPageSearchModule,
    NxFormfieldModule,
    NxIconModule,
    NxTabsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
