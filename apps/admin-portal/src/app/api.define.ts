import { environment } from '../environments/environment';

export const BASE_API_URL = `${environment.baseApi}/api`;
export const UPLOAD_FILE_API_URL = `${environment.apiUploadFile}/api`;
export const APP_CODE_UPLOAD = 'dfi';
export const API_VERSION_1 = 'v1';
export const CACHE_URL = 'isCacheUrl=true';
export const CRYPTO_KEY = 'UmZValhuMnI1dTh4IUElRCpHLUthUGRTZ1ZrWXAzczY=';
export const CRYPTO_VI = 'JUMqRi1KYU5kUmdVa1huMg==';
export const API_SERVICES = {
  ACCOUNTS: {
    AUTHENTICATE: `${BASE_API_URL}/${API_VERSION_1}/accounts/login-security`,
    CACHE_PERMISSIONS: `${BASE_API_URL}/${API_VERSION_1}/accounts/:id/permissions`,
    REGISTER: `${BASE_API_URL}/${API_VERSION_1}/accounts`,
    LOGOUT: `${BASE_API_URL}/${API_VERSION_1}/accounts/logout`,
    PERMISSIONS: `${BASE_API_URL}/${API_VERSION_1}/accounts/:id/permissions`,
    GET_ALL: `${BASE_API_URL}/${API_VERSION_1}/accounts`,
    GET_GENDER: `${BASE_API_URL}/${API_VERSION_1}/accounts/gender`,
    PUT: `${BASE_API_URL}/${API_VERSION_1}/accounts`,
    RESET_PWD: `${BASE_API_URL}/${API_VERSION_1}/accounts/reset-password-by-userid`,
    RESET_PWD_MANUAL: `${BASE_API_URL}/${API_VERSION_1}/accounts/reset-password`,
    GET_BY_ID: `${BASE_API_URL}/${API_VERSION_1}/accounts/:id`,
    UPDATE_USER: `${BASE_API_URL}/${API_VERSION_1}/accounts`,
    UPDATE_PROFILE: `${BASE_API_URL}/${API_VERSION_1}/accounts/:id/profile`,
    CHANGE_PASSWORD: `${BASE_API_URL}/${API_VERSION_1}/accounts/:id/change-password`,
    CHANGE_STATUS: `${BASE_API_URL}/${API_VERSION_1}/accounts/lock`,
    ASSIGN_PROJECT: `${BASE_API_URL}/${API_VERSION_1}/accounts/assign-project`,
    ASSIGN_PROJECT_FOR_USER: `${BASE_API_URL}/${API_VERSION_1}/accounts/assigned-project/user`,
  },
  POSITIONS: {
    GET_ALL: `${BASE_API_URL}/${API_VERSION_1}/positions/paging`,
  },
  PAGING: 'paging',
  CHANGE_STATUS: 'change-status',
  CHANGE_STATUS_VIEW_WEB: 'change-status-view-web',
  VIEW_DETAIL: 'view-detail',
  CONFIGS: `${BASE_API_URL}/${API_VERSION_1}/configs`,
  CONFIGS_ALL: `${BASE_API_URL}/${API_VERSION_1}/configs/all`,
  UPLOAD_IMAGE: `${UPLOAD_FILE_API_URL}/${API_VERSION_1}/files/upload/image`,
  UPLOAD_DOCS: `${UPLOAD_FILE_API_URL}/${API_VERSION_1}/files/upload/docs`,
  UPDATE_DOCS: `${UPLOAD_FILE_API_URL}/${API_VERSION_1}/files`,
  VIEW_ALL_PRODUCT: `${BASE_API_URL}/${API_VERSION_1}/products/view-paging`,
  VIEW_ALL_NEWS: `${BASE_API_URL}/${API_VERSION_1}/articles/view-paging`,
  REQUEST_BUY: `${BASE_API_URL}/${API_VERSION_1}/request-buy-investment-packages`,
  PROJECTS: {
    BASE: `${BASE_API_URL}/${API_VERSION_1}/projects`,
    PAGING: `${BASE_API_URL}/${API_VERSION_1}/projects/paging`,
  },
  ROLES: {
    GET_ALL: `${BASE_API_URL}/${API_VERSION_1}/roles`,
    POST: `${BASE_API_URL}/${API_VERSION_1}/roles`,
    PUT: `${BASE_API_URL}/${API_VERSION_1}/roles`,
    DELETE: `${BASE_API_URL}/${API_VERSION_1}/roles/:id`,
    DELETE_MULTI: `${BASE_API_URL}/${API_VERSION_1}/roles/delete-multi`,
    ACTIVE_PERMISSION: `${BASE_API_URL}/${API_VERSION_1}/roles/:id/active-permission?permissionId=:idper`,
    DE_ACTIVE_PERMISSION: `${BASE_API_URL}/${API_VERSION_1}/roles/:id/deactive-permission?permissionId=:idper`,
    GET_PERMISSIONS: `${BASE_API_URL}/${API_VERSION_1}/roles/:id/permissions`,
    ADD_USERS: `${BASE_API_URL}/${API_VERSION_1}/roles/:id/add-users`,
    GET_USERS: `${BASE_API_URL}/${API_VERSION_1}/roles/:id/users`,
    REMOVE_USERS: `${BASE_API_URL}/${API_VERSION_1}/roles/:id/remove-users`,
    ASSIGN_PERMISSION: `${BASE_API_URL}/${API_VERSION_1}/roles/:id/assign-permissions`,
  },
  SETTINGS: {
    BY_GROUP: `${BASE_API_URL}/${API_VERSION_1}/settings/by-group?${CACHE_URL}`,
  },
  PERMISSIONS: {
    GET_ALL: `${BASE_API_URL}/${API_VERSION_1}/roles`,
    POST: `${BASE_API_URL}/${API_VERSION_1}/roles`,
    PUT: `${BASE_API_URL}/${API_VERSION_1}/roles`,
    DELETE: `${BASE_API_URL}/${API_VERSION_1}/roles?id=:id`,
    GET_PERMISSIONS: `${BASE_API_URL}/${API_VERSION_1}/Permissions/:id/role-permission`,
    GET_GROUP_PERMISSIONS: `${BASE_API_URL}/${API_VERSION_1}/Permissions/group-permissions`,
  },
};
