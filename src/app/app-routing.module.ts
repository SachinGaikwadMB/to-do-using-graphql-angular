import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { ToDoHeaderComponent } from './components/to-do-header/to-do-header.component';

const routes: Routes = [

  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:ToDoHeaderComponent
  },
  {
    path:'add', component:ToDoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
