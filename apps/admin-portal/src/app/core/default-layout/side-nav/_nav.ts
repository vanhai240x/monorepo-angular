import { PERMISSION_CODE } from "../../../@common/app.permission.constants";
import { ROUTERS } from "@dkaccess/share-utils";

export const navItems = [
  {
    name: 'Home',
    url: ROUTERS.HOME,
    icon: 'assets/img/svg/icon-nav-01.svg',
    attributes: {
      permissions: [PERMISSION_CODE.PRODUCT.VIEW_PRODUCT],
    },
  },
  {
    name: 'Org Chart',
    url: ROUTERS.ORG_CHART,
    icon: 'assets/img/svg/icon-nav-02.svg',
    attributes: {
      permissions: [PERMISSION_CODE.PRODUCT.VIEW_PRODUCT],
    },
  },
  {
    name: 'Sản phẩm',
    url: ROUTERS.PRODUCT,
    icon: 'assets/img/svg/icon-nav-03.svg',
    attributes: {
      permissions: [PERMISSION_CODE.PRODUCT.VIEW_PRODUCT],
    },
  },
  {
    name: 'Dự án',
    url: ROUTERS.PROJECT,
    icon: 'assets/img/svg/icon-nav-04.svg',
    attributes: {
      permissions: [PERMISSION_CODE.PROJECT.VIEW_PROJECT],
    },
  },
  // {
  //   name: 'Đã mua',
  //   url: ROUTERS.BOUGHT,
  //   icon: 'assets/img/svg/icon-nav-bought.svg',
  //   attributes: {
  //     permissions: [PERMISSION_CODE.PROJECT.VIEW_PROJECT],
  //   },
  // },
  // {
  //   name: 'Tin tức',
  //   url: ROUTERS.NEWS,
  //   icon: 'assets/img/svg/icon-nav-news.svg',
  //   attributes: {
  //     permissions: [PERMISSION_CODE.SYSTEM.FULL_CONTROL],
  //   },
  // },
  // {
  //   name: 'Tài khoản',
  //   url: ROUTERS.ACCOUNTS,
  //   icon: 'assets/img/svg/icon-nav-03.svg',
  //   attributes: {
  //     permissions: [PERMISSION_CODE.ACCOUNT.VIEW_ACCOUNT],
  //   },
  // },
  // {
  //   name: 'Phân quyền',
  //   url: ROUTERS.ROLES,
  //   icon: 'assets/img/svg/icon-nav-04.svg',
  //   attributes: {
  //     permissions: [PERMISSION_CODE.SYSTEM.FULL_CONTROL],
  //   },
  // },
  // {
  //   name: 'Cấu hình',
  //   url: ROUTERS.CONFIG,
  //   icon: 'assets/img/svg/icon-nav-06.svg',
  //   attributes: {
  //     permissions: [PERMISSION_CODE.SYSTEM.FULL_CONTROL],
  //   },
  // },
];
