import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationChartComponent } from './organization-chart.component';
import { RouterModule, Routes } from '@angular/router';
import { OrgChartModule } from 'angular13-organization-chart';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: OrganizationChartComponent,
  },
];

@NgModule({
  declarations: [OrganizationChartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OrgChartModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class OrganizationChartModule {}
