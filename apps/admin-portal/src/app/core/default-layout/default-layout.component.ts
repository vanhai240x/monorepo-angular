import { Component, ViewChild } from '@angular/core';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'admin-portal-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  @ViewChild('headerComp') headerComp!: DefaultHeaderComponent;
  @ViewChild('sidenavComp') sidenavComp!: SideNavComponent;

  getSidebar($event: boolean) {
    this.sidenavComp.isCollapseSidebar = $event;
    this.headerComp.isCollapseSidebar = $event;
  }
}
