const _nav = [
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
];

export default _nav;
