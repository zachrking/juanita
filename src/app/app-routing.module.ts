import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidesComponent } from './slides/slides.component';
import { MusicComponent } from './music/music.component';


const routes: Routes = [ 
  { path: '', component: SlidesComponent },
  { path: 'slides', component: SlidesComponent},
  { path: 'music', component: MusicComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule {}