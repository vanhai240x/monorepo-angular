import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { API_SERVICES } from '../api.define';
import { generateBodyPostListview } from '@dkaccess/share-utils';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configInfo$ = new BehaviorSubject('');

  constructor(public httpClient: HttpClient) {}

  getViewPaging(paging?: any, groupFilters?: any, sort?: any, includes?: string[]) {
    const body = generateBodyPostListview(paging, groupFilters, sort, includes);
    return this.httpClient.post(`${API_SERVICES.VIEW_ALL_PRODUCT}`, body);
  }

  getgConfigs() {
    return this.httpClient.get(`${API_SERVICES.CONFIGS_ALL}`);
  }

  getgConfig(id: string) {
    return this.httpClient.get(`${API_SERVICES.CONFIGS}/${id}`);
  }

  cachePermissions(id: string, paging?: any, groupFilters?: any, sort?: any, includes?: string[]) {
    const body = generateBodyPostListview(paging, groupFilters, sort, includes);
    return this.httpClient.post(
      `${API_SERVICES.ACCOUNTS.CACHE_PERMISSIONS}`.replace(':id', id),
      body,
    );
  }

  buyRequest(body: any) {
    return this.httpClient.post(`${API_SERVICES.REQUEST_BUY}`, body);
  }
}
