import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Dashboard',
  //   to: '/firstavenue/dashboard',
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Budget-O-Matic 관리'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: '결과 페이지 내역 보기',
    to: '/firstavenue/budgetomatic-page/results-list',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: '템플릿 관리',
    to: '/firstavenue/budgetomatic-page/templates',
    icon: 'cil-pencil',
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['메인 페이지 관리'],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: '배너 관리',
  //   to: '/firstavenue/main-page/banners',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: '노출 관리',
  //   to: '/firstavenue/main-page/show',
  //   icon: 'cil-pencil',
  // },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['컨텐츠 관리'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Main / Popular Locations Pages',
    to: '/firstavenue/popularlocations-page',
    icon: 'cil-pencil',
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'People 페이지 관리',
  //   to: '/firstavenue/people-page',
  //   icon: 'cil-pencil',
  // },
  // TODO: REMOVE ALL THE ITEMS BELOW ON PRODUCTION
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme'],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/firstavenue/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/firstavenue/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Base',
  //   route: '/base',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Breadcrumb',
  //       to: '/firstavenue/base/breadcrumbs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Cards',
  //       to: '/firstavenue/base/cards',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Carousel',
  //       to: '/firstavenue/base/carousels',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Collapse',
  //       to: '/firstavenue/base/collapses',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Forms',
  //       to: '/firstavenue/base/forms',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Jumbotron',
  //       to: '/firstavenue/base/jumbotrons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'List group',
  //       to: '/firstavenue/base/list-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Navs',
  //       to: '/firstavenue/base/navs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Navbars',
  //       to: '/firstavenue/base/navbars',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Pagination',
  //       to: '/firstavenue/base/paginations',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Popovers',
  //       to: '/firstavenue/base/popovers',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Progress',
  //       to: '/firstavenue/base/progress-bar',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Switches',
  //       to: '/firstavenue/base/switches',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tables',
  //       to: '/firstavenue/base/tables',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tabs',
  //       to: '/firstavenue/base/tabs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tooltips',
  //       to: '/firstavenue/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Buttons',
  //   route: '/buttons',
  //   icon: 'cil-cursor',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons',
  //       to: '/firstavenue/buttons/buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Brand buttons',
  //       to: '/firstavenue/buttons/brand-buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons groups',
  //       to: '/firstavenue/buttons/button-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Dropdowns',
  //       to: '/firstavenue/buttons/button-dropdowns',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Charts',
  //   to: '/firstavenue/charts',
  //   icon: 'cil-chart-pie',
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/firstavenue/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/firstavenue/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/firstavenue/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Alerts',
  //       to: '/firstavenue/notifications/alerts',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Badges',
  //       to: '/firstavenue/notifications/badges',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Modal',
  //       to: '/firstavenue/notifications/modals',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Toaster',
  //       to: '/firstavenue/notifications/toaster',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/firstavenue/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/firstavenue/login',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/firstavenue/register',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/firstavenue/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/firstavenue/500',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   disabled: true,
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels'],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger',
  //   },
  //   label: true,
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info',
  //   },
  //   label: true,
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning',
  //   },
  //   label: true,
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2',
  // },
];

export default _nav;
