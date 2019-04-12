import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: '../pages/feed/feed.module#FeedPageModule'
          }
        ]
      },
      {
        path: 'explorar',
        children: [
          {
            path: '',
            loadChildren: '../pages/explorar/explorar.module#ExplorarPageModule'
          }
        ]
      },
      {
        path: 'estatisticas',
        children: [
          {
            path: '',
            loadChildren: '../pages/estatisticas/estatisticas.module#EstatisticasPageModule'
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../pages/perfil/perfil.module#PerfilPageModule'
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
