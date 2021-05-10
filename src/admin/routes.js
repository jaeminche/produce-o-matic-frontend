import React from 'react';

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
];

export default routes;
