import React from 'react';

const Toaster = React.lazy(() =>
  import('./views/notifications/toaster/Toaster'),
);
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() =>
  import('./views/base/breadcrumbs/Breadcrumbs'),
);
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() =>
  import('./views/base/jumbotrons/Jumbotrons'),
);
const ListGroups = React.lazy(() =>
  import('./views/base/list-groups/ListGroups'),
);
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() =>
  import('./views/base/paginations/Paginations'),
);
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() =>
  import('./views/base/progress-bar/ProgressBar'),
);
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() =>
  import('./views/buttons/brand-buttons/BrandButtons'),
);
const ButtonDropdowns = React.lazy(() =>
  import('./views/buttons/button-dropdowns/ButtonDropdowns'),
);
const ButtonGroups = React.lazy(() =>
  import('./views/buttons/button-groups/ButtonGroups'),
);
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Home = React.lazy(() => import('./views/home/Home'));
const BudgetResultsView = React.lazy(() =>
  import('./views/budgetomatic/BudgetResultsView'),
);
const BudgetResultView = React.lazy(() =>
  import('./views/budgetomatic/BudgetResultView'),
);
const BudgetOMaticTemplate = React.lazy(() =>
  import('./views/budgetomatic/BudgetOMaticTemplate'),
);
const BudgetOMaticTemplateGroup = React.lazy(() =>
  import('./views/budgetomatic/BudgetOMaticTemplateGroup'),
);
const BudgetOMaticTemplateModify = React.lazy(() =>
  import('./views/budgetomatic/BudgetOMaticTemplateModify'),
);
const PopularLocationsView = React.lazy(() =>
  import('./views/contents/PopularLocationsView'),
);
const PopularLocationView = React.lazy(() =>
  import('./views/contents/PopularLocationView'),
);

const CoreUIIcons = React.lazy(() =>
  import('./views/icons/coreui-icons/CoreUIIcons'),
);
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() =>
  import('./views/theme/typography/Typography'),
);
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/firstavenue', exact: true, name: 'Home', component: Home },
  { path: '/firstavenue/dashboard', name: 'Dashboard', component: Dashboard },
  {
    path: '/firstavenue/budgetomatic-page/results-list',
    exact: true,
    name: 'BudgetResultsView',
    component: BudgetResultsView,
  },
  {
    path: '/firstavenue/budgetomatic-page/results-list/:id',
    exact: true,
    name: 'BudgetResultView',
    component: BudgetResultView,
  },
  {
    path: '/firstavenue/budgetomatic-page/templates',
    exact: true,
    name: 'BudgetOMaticTemplate',
    component: BudgetOMaticTemplate,
  },
  {
    path: '/firstavenue/budgetomatic-page/templates/:id',
    exact: true,
    name: 'BudgetOMaticTemplateGroup',
    component: BudgetOMaticTemplateGroup,
  },
  {
    path: '/firstavenue/budgetomatic-page/add',
    exact: true,
    name: 'BudgetOMaticTemplateModify',
    component: BudgetOMaticTemplateModify,
  },
  {
    path: '/firstavenue/main-page/banners',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/firstavenue/main-page/show',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/firstavenue/popularlocations-page',
    exact: true,
    name: 'PopularLocationsView',
    component: PopularLocationsView,
  },
  {
    path: '/firstavenue/popularlocations-page/add',
    exact: true,
    name: 'PopularLocationView',
    component: PopularLocationView,
  },
  {
    path: '/firstavenue/popularlocations-page/:id',
    exact: true,
    name: 'PopularLocationView',
    component: PopularLocationView,
  },
  { path: '/firstavenue/people-page', name: 'Dashboard', component: Dashboard },

  // TODO: REMOVE ALL THE ITEMS BELOW ON PRODUCTION
  { path: '/firstavenue/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/firstavenue/theme/colors', name: 'Colors', component: Colors },
  {
    path: '/firstavenue/theme/typography',
    name: 'Typography',
    component: Typography,
  },
  { path: '/firstavenue/base', name: 'Base', component: Cards, exact: true },
  {
    path: '/firstavenue/base/breadcrumbs',
    name: 'Breadcrumbs',
    component: Breadcrumbs,
  },
  { path: '/firstavenue/base/cards', name: 'Cards', component: Cards },
  {
    path: '/firstavenue/base/carousels',
    name: 'Carousel',
    component: Carousels,
  },
  {
    path: '/firstavenue/base/collapses',
    name: 'Collapse',
    component: Collapses,
  },
  { path: '/firstavenue/base/forms', name: 'Forms', component: BasicForms },
  {
    path: '/firstavenue/base/jumbotrons',
    name: 'Jumbotrons',
    component: Jumbotrons,
  },
  {
    path: '/firstavenue/base/list-groups',
    name: 'List Groups',
    component: ListGroups,
  },
  { path: '/firstavenue/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/firstavenue/base/navs', name: 'Navs', component: Navs },
  {
    path: '/firstavenue/base/paginations',
    name: 'Paginations',
    component: Paginations,
  },
  { path: '/firstavenue/base/popovers', name: 'Popovers', component: Popovers },
  {
    path: '/firstavenue/base/progress-bar',
    name: 'Progress Bar',
    component: ProgressBar,
  },
  { path: '/firstavenue/base/switches', name: 'Switches', component: Switches },
  { path: '/firstavenue/base/tables', name: 'Tables', component: Tables },
  { path: '/firstavenue/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/firstavenue/base/tooltips', name: 'Tooltips', component: Tooltips },
  {
    path: '/firstavenue/buttons',
    name: 'Buttons',
    component: Buttons,
    exact: true,
  },
  { path: '/firstavenue/buttons/buttons', name: 'Buttons', component: Buttons },
  {
    path: '/firstavenue/buttons/button-dropdowns',
    name: 'Dropdowns',
    component: ButtonDropdowns,
  },
  {
    path: '/firstavenue/buttons/button-groups',
    name: 'Button Groups',
    component: ButtonGroups,
  },
  {
    path: '/firstavenue/buttons/brand-buttons',
    name: 'Brand Buttons',
    component: BrandButtons,
  },
  { path: '/firstavenue/charts', name: 'Charts', component: Charts },
  {
    path: '/firstavenue/icons',
    exact: true,
    name: 'Icons',
    component: CoreUIIcons,
  },
  {
    path: '/firstavenue/icons/coreui-icons',
    name: 'CoreUI Icons',
    component: CoreUIIcons,
  },
  { path: '/firstavenue/icons/flags', name: 'Flags', component: Flags },
  { path: '/firstavenue/icons/brands', name: 'Brands', component: Brands },
  {
    path: '/firstavenue/notifications',
    name: 'Notifications',
    component: Alerts,
    exact: true,
  },
  {
    path: '/firstavenue/notifications/alerts',
    name: 'Alerts',
    component: Alerts,
  },
  {
    path: '/firstavenue/notifications/badges',
    name: 'Badges',
    component: Badges,
  },
  {
    path: '/firstavenue/notifications/modals',
    name: 'Modals',
    component: Modals,
  },
  {
    path: '/firstavenue/notifications/toaster',
    name: 'Toaster',
    component: Toaster,
  },
  { path: '/firstavenue/widgets', name: 'Widgets', component: Widgets },
  { path: '/firstavenue/users', exact: true, name: 'Users', component: Users },
  {
    path: '/firstavenue/users/:id',
    exact: true,
    name: 'User Details',
    component: User,
  },
];

export default routes;
