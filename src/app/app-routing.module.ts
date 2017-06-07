import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ButtonViewComponent } from './button-view/button-view.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipButtonComponent } from './tooltip-button/tooltip-button.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'buttons', component: ButtonViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    HomeComponent,
    ButtonViewComponent,
    TooltipDirective,
    TooltipButtonComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
