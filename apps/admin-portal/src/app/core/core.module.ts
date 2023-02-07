import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultHeaderComponent } from './default-layout/default-header/default-header.component';
import { SideNavComponent } from './default-layout/side-nav/side-nav.component';
import { HasPermissionDirective } from './directives/permission.directive';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    SideNavComponent,
    HasPermissionDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule,
  ],
  exports: [HasPermissionDirective],
})
export class CoreModule {}
