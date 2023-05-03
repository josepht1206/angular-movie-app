import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { NxOverlayModule } from '@aposin/ng-aquila/overlay';
import { NxModalModule } from '@aposin/ng-aquila/modal';

import { AppComponent } from './app.component';
import { SearchMoviesComponent } from './pages/search-movies/search-movies.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { FavoriteMoviesComponent } from './pages/favorite-movies/favorite-movies.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: SearchMoviesComponent },
  { path: 'favorites', component: FavoriteMoviesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesComponent,
    MovieListComponent,
    FavoriteMoviesComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    NxOverlayModule,
    NxModalModule.forRoot(),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
