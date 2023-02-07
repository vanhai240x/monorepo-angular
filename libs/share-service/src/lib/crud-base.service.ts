import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generateBodyPostListview } from '@dkaccess/share-utils';

@Injectable({
  providedIn: 'root',
})
export class CrudBaseService {
  apiName = '';
  baseApiUrl = 'https://dfi-api-dev.danhkhoi.io/api/v1';

  constructor(public httpClient: HttpClient) {}

  getPaging(paging?: any, groupFilters?: any, sort?: any, includes?: string[]) {
    const body = generateBodyPostListview(paging, groupFilters, sort, includes);
    return this.httpClient.post(
      `${this.baseApiUrl}/${this.apiName}/paging`,
      body,
    );
  }

  create(body: any) {
    return this.httpClient.post(`${this.baseApiUrl}/${this.apiName}`, body);
  }

  getDetail(id: string) {
    return this.httpClient.get(`${this.baseApiUrl}/${this.apiName}/${id}`);
  }

  viewDetail(id: string) {
    return this.httpClient.get(
      `${this.baseApiUrl}/${this.apiName}/${id}/view-detail`,
    );
  }

  update(body: any) {
    return this.httpClient.put(`${this.baseApiUrl}/${this.apiName}`, body);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.baseApiUrl}/${this.apiName}/${id}`);
  }

  changeStatus(id: string, isActive: boolean) {
    return this.httpClient.put(
      `${this.baseApiUrl}/${this.apiName}/${id}/change-status?isActive=${isActive}`,
      null,
    );
  }
}
