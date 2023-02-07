import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CONFIGS } from '@dkaccess/share-utils';
import { ConfigService } from '../../../@services/config.service';
import { navItems } from './_nav';

export const IS_COLLAPSE_SIDEBAR = 'isCollapseSidebar';

@Component({
  selector: 'admin-portal-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Output() emitSidebar = new EventEmitter();
  isCollapseSidebar = localStorage.getItem(IS_COLLAPSE_SIDEBAR) === 'true' || false;
  navItems = navItems;
  panelOpenState = false;
  configsInfo = {
    logo: '',
    logoMini: '',
  };

  constructor(private configSvc: ConfigService) {}

  ngOnInit(): void {
    this.getConfigs();
  }

  getConfigs() {
    this.configSvc.getgConfigs().subscribe((res: any) => {
      res.data.forEach((config: { id: string; code: string; value: string }) => {
        switch (config.code) {
          case CONFIGS.LOGO:
            this.configsInfo.logo = config.value;
            break;
          case CONFIGS.LOGO_MINI:
            this.configsInfo.logoMini = config.value;
            break;

          default:
            break;
        }
      });
    });
  }

  toggleSidebar(value: boolean) {
    this.isCollapseSidebar = value;
    this.emitSidebar.emit(this.isCollapseSidebar);
    localStorage.setItem(IS_COLLAPSE_SIDEBAR, value.toString());
  }
}
