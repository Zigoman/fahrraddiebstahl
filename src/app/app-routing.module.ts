import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { InfoComponent } from './core/info/info.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'main/:id', component: InfoComponent }
    ]
  },
  {
    path: '**',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
