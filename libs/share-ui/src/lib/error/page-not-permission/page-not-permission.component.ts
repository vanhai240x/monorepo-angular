import { Component, OnInit } from '@angular/core';
import { ROLES } from '@dkaccess/share-utils';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AuthService } from '@dkaccess/share-service';

@Component({
  selector: 'app-page-not-permission',
  templateUrl: './page-not-permission.component.html',
  styleUrls: ['./page-not-permission.component.scss'],
})
export class PageNotPermissionComponent implements OnInit {
  link = '/';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const roles = this.authService.getRole();
    if (roles.includes(ROLES.Manager.code)) {
      this.link = '/reports';
    } else {
      this.link = '/';
    }
  }
}
