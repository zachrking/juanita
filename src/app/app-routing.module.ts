import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [ 
  { path: 'news', component: NewsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule {}