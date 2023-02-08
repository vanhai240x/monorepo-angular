import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ROUTERS } from '@dkaccess/share-utils';

export const routes: Routes = [
  {
    path: ROUTERS.HOME,
    title: 'Trang chủ',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ROUTERS.ORG_CHART,
    title: 'Organization Chart',
    loadChildren: () => import('./organization-chart/organization-chart.module').then((m) => m.OrganizationChartModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
