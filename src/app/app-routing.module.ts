import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailComponent, DriverListComponent } from './components';

const routes: Routes = [
  {
    path : "",
    component : DriverListComponent
  },
  {
    path : ":id",
    component : DriverDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
