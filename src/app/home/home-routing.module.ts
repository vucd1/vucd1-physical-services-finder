import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: 'search',
            loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'bookmarks',
        loadChildren: () => import('../bookmarks/bookmarks.module').then( m => m.BookmarksPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
