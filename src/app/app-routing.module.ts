import { AuthComponent } from './pages/auth/auth.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'',
      component:AppComponent,
      children:[
        {
          path:"board",
          loadChildren: () => import('./pages/board/board.module').then(m => m.BoardModule)
        },
        {
          path:"auth",
          component:AuthComponent
        },
        {
          path:'**',
          redirectTo:'auth'
        },


      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
