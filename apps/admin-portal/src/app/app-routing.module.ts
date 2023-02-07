import { Injectable, NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  TitleStrategy,
  RouterStateSnapshot,
} from '@angular/router';
import { ROUTERS } from '@dkaccess/share-utils';
import { AuthenticationGuard } from '@dkaccess/share-service';
import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';
import { PageNotFoundComponent, P500Component, PageNotPermissionComponent } from '@dkaccess/share-ui';

export const routes: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent,
    data: { title: 'Page 404' },
  },
  {
    path: '500',
    component: P500Component,
    data: { title: 'Page 500' },
  },
  {
    path: '403',
    component: PageNotPermissionComponent,
    data: { title: 'Page 403' },
  },
  {
    path: ROUTERS.AUTHENTICATION,
    canActivate: [AuthenticationGuard],
    data: { title: 'Authentication Page' },
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./views/user/user.module').then((m) => m.UserModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      document.title = `Admin Portal - ${title}`;
    } else {
      document.title = 'Admin Portal';
    }
  }
}

// const config: ExtraOptions = {
//   // useHash: true,
//   onSameUrlNavigation: 'reload',
//   preloadingStrategy: PreloadAllModules,
//   useHash: true,
//   relativeLinkResolution: 'legacy',
// };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}
