//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import { UsersList, UsersCreate, UsersEdit } from './resources/Users';
import {
  DepartmentsList,
  DepartmentsCreate,
  DepartmentsEdit,
} from './resources/Departments';
import {
  InitiativesList,
  InitiativesCreate,
  InitiativesEdit,
} from './resources/Initiatives';
import { GoalsList, GoalsCreate, GoalsEdit } from './resources/Goals';
import {
  EmissionsourcesList,
  EmissionsourcesCreate,
  EmissionsourcesEdit,
} from './resources/Emissionsources';
import {
  ResourceusageList,
  ResourceusageCreate,
  ResourceusageEdit,
} from './resources/Resourceusage';
import UsersIcon from '@mui/icons-material/Person';
import DepartmentsIcon from '@mui/icons-material/BusinessCenter';
import InitiativesIcon from '@mui/icons-material/Campaign';
import GoalsIcon from '@mui/icons-material/Flag';
import EmissionsourcesIcon from '@mui/icons-material/Score';
import ResourceusageIcon from '@mui/icons-material/Assessment';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/a3265ec10">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="Users"
          options={{ label: 'Users' }}
          list={UsersList}
          create={UsersCreate}
          edit={UsersEdit}
          recordRepresentation="id"
          icon={UsersIcon}
        />
        <Resource
          name="Departments"
          options={{ label: 'Departments' }}
          list={DepartmentsList}
          create={DepartmentsCreate}
          edit={DepartmentsEdit}
          recordRepresentation="id"
          icon={DepartmentsIcon}
        />
        <Resource
          name="Initiatives"
          options={{ label: 'Initiatives' }}
          list={InitiativesList}
          create={InitiativesCreate}
          edit={InitiativesEdit}
          recordRepresentation="name"
          icon={InitiativesIcon}
        />
        <Resource
          name="Goals"
          options={{ label: 'Goals' }}
          list={GoalsList}
          create={GoalsCreate}
          edit={GoalsEdit}
          recordRepresentation="name"
          icon={GoalsIcon}
        />
        <Resource
          name="Emissionsources"
          options={{ label: 'Emission Sources' }}
          list={EmissionsourcesList}
          create={EmissionsourcesCreate}
          edit={EmissionsourcesEdit}
          recordRepresentation="id"
          icon={EmissionsourcesIcon}
        />
        <Resource
          name="Resourceusage"
          options={{ label: 'Resource Usage' }}
          list={ResourceusageList}
          create={ResourceusageCreate}
          edit={ResourceusageEdit}
          recordRepresentation="id"
          icon={ResourceusageIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
