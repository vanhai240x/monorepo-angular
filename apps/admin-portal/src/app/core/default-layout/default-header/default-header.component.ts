import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ROUTERS, CURRENT_USER, PAGE_LOGIN } from '@dkaccess/share-utils';
import { AuthService } from '../../../auth/services/auth.service';
import { CommonHelper } from '@dkaccess/share-utils';
import { IS_COLLAPSE_SIDEBAR } from '../side-nav/side-nav.component';
import { navItems } from '../side-nav/_nav';

@Component({
  selector: 'admin-portal-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent implements OnInit {
  @Output() emitSidebar = new EventEmitter();
  isCollapseSidebar = localStorage.getItem(IS_COLLAPSE_SIDEBAR) === 'true' || false;
  navItems = navItems;
  breadcrums: {
    name: string;
    url: string;
  }[] = [];

  user: any;
  readonly ROUTERS = ROUTERS;

  constructor(
    private router: Router,
    private commonHelper: CommonHelper,
    private authService: AuthService,
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.breadcrums = [
          {
            name: 'Trang chủ',
            url: `/${ROUTERS.ADMIN.BASE}`,
          },
        ];
        this.navItems.forEach((nav: any) => {
          if (nav.url) {
            if (router.url.includes(nav.url)) {
              this.breadcrums.push(nav);
            }
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER) || '');
  }

  logout() {
    this.authService.removeStorage();
    this.router.navigate([`/${PAGE_LOGIN}`]);
    this.authService.logout().subscribe();
  }

  toggleSidebar(value: boolean) {
    this.isCollapseSidebar = value;
    this.emitSidebar.emit(this.isCollapseSidebar);
    localStorage.setItem(IS_COLLAPSE_SIDEBAR, value.toString());
  }
}
