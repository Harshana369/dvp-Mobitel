import { useState, useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import CryptoJS from 'react-native-crypto-js';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Home from './pages/Home';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Unauthorized from './pages/Unauthorized';
import Databases from './pages/Databases';
import VendorProjectsInsightsHome from './pages/VendorProjectsInsights';
import VendorProjectsInsights from './components/_dashboard/Insights/AllVendorInsights/AllVendorProjectsInsights';
import HuaweiProjectsInsights from './components/_dashboard/Insights/HuaweiInsights/HuaweiProjectsInsights';
import ZTEProjectsInsights from './components/_dashboard/Insights/ZTE Insights/ZTEProjectsInsights';
import Tasks from './pages/Tasks';
import Other from './pages/Other';
import Addnew from './pages/Addnew';
import MobitelProjectsOverview from './pages/MobitelProjectsOverview';
import MobitelSubProjects from './pages/MobitelSubProjects';
import MobitelProjectsFinance from './pages/MobitelProjectsFinance';
import MobitelProjectsInsights from './pages/MobitelProjectsInsights';
import MobitelProjectsSiteEngineers from './pages/MobitelProjectsSiteEngineers';
import VendorProjectsOverview from './pages/VendorProjectsOverview';
import AllVendorProjectsOverview from './components/_dashboard/VendorProjectsOverview/AllVendors/AllVendorProjectsOverview';
import VendorProjectsOverviewHuawei from './components/_dashboard/VendorProjectsOverview/HuaweiOverview/VendorProjectsOverviewHuawei';
import VendorProjectsOverviewZTE from './components/_dashboard/VendorProjectsOverview/ZTEOverview/VendorProjectsOverviewZTE';
import VendorProjectsMilestones from './pages/VendorProjectsMilestones';
import VendorProjectsMilestonesAll from './components/_dashboard/VendorProjectsMilestones/AllVendorProjects/AllVendorProjectsMilestones';
import VendorProjectsMilestonesHuawei from './components/_dashboard/VendorProjectsMilestones/HuaweiProjects/HuaweiProjectsMilestones';
import VendorProjectsMilestonesZTE from './components/_dashboard/VendorProjectsMilestones/ZTEProjects/ZTEProjectsMilestones';
import VendorProjectsDatabase from './pages/VendorProjectsDatabase';
import VendorProjectsDatabaseAll from './components/_dashboard/VendorProjectDatabase/AllVendors/AllVendorsDatabases';
import VendorProjectsDatabaseAllProjectsViewOnly from './components/_dashboard/VendorProjectDatabase/AllVendorProjectsDatabasesView/AllVendorsDatabases';
import VendorProjectsDatabaseHuawei from './components/_dashboard/VendorProjectDatabase/Huawei/VendorsDatabasesHuawei';
// vendor prjects All vendor projects pending tasks
import DatabasesVendorProjectsAllVendorPendingTasks from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/PendingTasksHome/VendorDatabasesPendingTasksHome';
import DatabasesVendorProjectsPendingVendorProjectsHODetails from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/HODetails/HODetailsPage';
import DatabasesVendorProjectsPendingVendorProjectsAssign from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Assign/AssignPage';
import DatabasesVendorProjectsPendingVendorProjectsTeamAllocation from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/TeamAllocation/TeamAllocationPage';
import DatabasesVendorProjectsPendingVendorProjectsDependencies from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Dependencies/DependenciesPage';
import DatabasesVendorProjectsPendingVendorProjectsPRPO from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/PRPOProgress/PRPOProgressPage';
import DatabasesVendorProjectsPendingVendorProjectsLogistics from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Logistics/LogisticsPage';
import DatabasesVendorProjectsPendingVendorProjectsImplementation from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Implementation/ImplementationPage';
import DatabasesVendorProjectsPendingVendorProjectsAcceptance from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Acceptance/AcceptancePage';
import DatabasesVendorProjectsPendingVendorProjectsPayment from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Payment/PaymentPage';
// vendor projects Huawei vendor projects pending tasks
import DatabasesVendorProjectsHuaweiPendingTasks from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/PendingTasksHome/VendorDatabasesPendingTasksHome';
import DatabasesVendorProjectsPendingHuaweiProjectsHODetails from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/HODetails/HODetailsPage';
import DatabasesVendorProjectsPendingHuaweiProjectsAssign from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Assign/AssignPage';
import DatabasesVendorProjectsPendingHuaweiProjectsTeamAllocation from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/TeamAllocation/TeamAllocationPage';
import DatabasesVendorProjectsPendingHuaweiProjectsDependencies from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Dependencies/DependenciesPage';
import DatabasesVendorProjectsPendingHuaweiProjectsPRPO from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/PRPOProgress/PRPOProgressPage';
import DatabasesVendorProjectsPendingHuaweiProjectsLogistics from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Logistics/LogisticsPage';
import DatabasesVendorProjectsPendingHuaweiProjectsImplementation from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Implementation/ImplementationPage';
import DatabasesVendorProjectsPendingHuaweiProjectsAcceptance from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Acceptance/AcceptancePage';
import DatabasesVendorProjectsPendingHuaweiProjectsPayment from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Payment/PaymentPage';
// vendor projects ZTE vendor projects pending tasks
import DatabasesVendorProjectsZTEPendingTasks from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/PendingTasksHome/VendorDatabasesPendingTasksHome';
import DatabasesVendorProjectsPendingZTEProjectsHODetails from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/HODetails/HODetailsPage';
import DatabasesVendorProjectsPendingZTEProjectsAssign from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Assign/AssignPage';
import DatabasesVendorProjectsPendingZTEProjectsTeamAllocation from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/TeamAllocation/TeamAllocationPage';
import DatabasesVendorProjectsPendingZTEProjectsDependencies from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Dependencies/DependenciesPage';
import DatabasesVendorProjectsPendingZTEProjectsPRPO from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/PRPOProgress/PRPOProgressPage';
import DatabasesVendorProjectsPendingZTEProjectsLogistics from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Logistics/LogisticsPage';
import DatabasesVendorProjectsPendingZTEProjectsImplementation from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Implementation/ImplementationPage';
import DatabasesVendorProjectsPendingZTEProjectsAcceptance from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Acceptance/AcceptancePage';
import DatabasesVendorProjectsPendingZTEProjectsPayment from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Payment/PaymentPage';
// vendor projects ZTE projects
import VendorProjectsDatabaseZTE from './components/_dashboard/VendorProjectDatabase/ZTE/VendorsDatabasesZTE';
import DatabasesFileUpload from './pages/DatabasesFileUpload';
import VendorProjectsDatabasesFileUpload from './components/_dashboard/DatabasesFilesUploads/VendorProjects/VendorProjectsDatabasesFileUpload';
import MobitelProjectsDatabasesFileUpload from './components/_dashboard/DatabasesFilesUploads/MobitelProjects/MobitelProjectsDatabasesFileUpload';
import MobitelProjectsDatabasesExcelEdit from './components/_dashboard/DatabasesFilesUploads/ExcellEditMobitelProjects/MobitelProjectsDatabasesExcelEdit';
import VendorProjectsDatabasesExcelEdit from './components/_dashboard/DatabasesFilesUploads/ExcellEditVendorProjects/VendorProjectsDatabasesExcelEdit';
import MobitelProjectsMilestones from './pages/MobitelProjectsMilestones';
import MobitelProjectsDatabase from './pages/MobitelProjectsDatabase';
// Mobitel Databases
import DatabasesMobitelProjectsAllMobitelProjects from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/AllMobitelProjectsPage';
import DatabasesMobitelProjectsPendingMobitelProjects from './components/_dashboard/MobitelProjectDatabase/PendingTasks/PendingTasksHome/MobitelDatabasesPendingTasksHome';
import DatabasesMobitelProjectsPendingMobitelProjectsHODetails from './components/_dashboard/MobitelProjectDatabase/PendingTasks/HODetails/HODetailsPage';
import DatabasesMobitelProjectsPendingMobitelProjectsAssign from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Assign/AssignPage';
import DatabasesMobitelProjectsPendingMobitelProjectsTeamAllocation from './components/_dashboard/MobitelProjectDatabase/PendingTasks/TeamAllocation/TeamAllocationPage';
import DatabasesMobitelProjectsPendingMobitelProjectsDependencies from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Dependencies/DependenciesPage';
import DatabasesMobitelProjectsPendingMobitelProjectsPRPO from './components/_dashboard/MobitelProjectDatabase/PendingTasks/PRPOProgress/PRPOProgressPage';
import DatabasesMobitelProjectsPendingMobitelProjectsLogistics from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Logistics/LogisticsPage';
import DatabasesMobitelProjectsPendingMobitelProjectsImplementation from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Implementation/ImplementationPage';
import DatabasesMobitelProjectsPendingMobitelProjectsAcceptance from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Acceptance/AcceptancePage';
import DatabasesMobitelProjectsPendingMobitelProjectsPayment from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Payment/PaymentPage';
import DatabasesMobitelProjectsAllMobitelProjectsViewOnly from './components/_dashboard/MobitelProjectDatabase/ViewOnlyMobitelDatabase/ViewOnlyMobitelProjectsPage';

// Users
import RegisterUsers from './pages/RegisterUsers';
import UserList from './pages/UserList';
import UserProfile from './pages/UserProfile';
import TestDb1 from './pages/TestDb1';
import TestDb1CreatePost from './pages/TestDb1CreatePost';
import TestDb1ViewPost from './pages/TestDb1ViewPost';
import EditDetailsVOT from './components/_dashboard/VendorProjectsOverview/EditDetails';
import AddNewVendorProject from './components/_dashboard/VendorProjectDatabase/AllVendors/AddNewVendorProject';
import AddNewHuaweiVendorProject from './components/_dashboard/VendorProjectDatabase/Huawei/AddNewVendorProject';
import AddNewZTEVendorProject from './components/_dashboard/VendorProjectDatabase/ZTE/AddNewVendorProject';
// Edit vendor projects database by forms
import EditAllVendorProjectsDatabase from './components/_dashboard/VendorProjectDatabase/AllVendors/EditAllVendorProjectsDatabase';
import EditProjectHODetails from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/HODetails/EditProjectHODetails';
import EditProjectAssign from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Assign/EditProjectAssign';
import EditTeamAllocation from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/TeamAllocation/EditTeamAllocation';
import EditProjectDependencies from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Dependencies/EditProjectDependencies';
import EditPRPOProgress from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/PRPOProgress/EditPRPOProgress';
import EditProjectLogistics from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Logistics/EditProjectLogistics';
import EditImplementation from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Implementation/EditProjectImplementation';
import EditProjectAcceptance from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Acceptance/EditProjectAcceptance';
import EditProjectPayment from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Payment/EditProjectPayment';
// Edit Huawei projects database by forms
import EditHuaweiVendorProjectsDatabase from './components/_dashboard/VendorProjectDatabase/Huawei/EditAllVendorProjectsDatabase';
import EditHuaweiProjectHODetails from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/HODetails/EditProjectHODetails';
import EditHuaweiProjectAssign from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Assign/EditProjectAssign';
import EditHuaweiTeamAllocation from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/TeamAllocation/EditTeamAllocation';
import EditHuaweiProjectDependencies from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Dependencies/EditProjectDependencies';
import EditHuaweiPRPOProgress from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/PRPOProgress/EditPRPOProgress';
import EditHuaweiProjectLogistics from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Logistics/EditProjectLogistics';
import EditHuaweiImplementation from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Implementation/EditProjectImplementation';
import EditHuaweiProjectAcceptance from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Acceptance/EditProjectAcceptance';
import EditHuaweiProjectPayment from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Payment/EditProjectPayment';
// Edit ZTE projects database by forms
import EditZTEVendorProjectsDatabase from './components/_dashboard/VendorProjectDatabase/ZTE/EditZTEProjectsDatabase';
import EditZTEProjectHODetails from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/HODetails/EditProjectHODetails';
import EditZTEProjectAssign from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Assign/EditProjectAssign';
import EditZTETeamAllocation from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/TeamAllocation/EditTeamAllocation';
import EditZTEProjectDependencies from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Dependencies/EditProjectDependencies';
import EditZTEPRPOProgress from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/PRPOProgress/EditPRPOProgress';
import EditZTEProjectLogistics from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Logistics/EditProjectLogistics';
import EditZTEImplementation from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Implementation/EditProjectImplementation';
import EditZTEProjectAcceptance from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Acceptance/EditProjectAcceptance';
import EditZTEProjectPayment from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Payment/EditProjectPayment';
// Edit ZTE Vendor Projects Database
import AddNewMobitelProject from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/AddNewMobitelProject';
import EditMobitelProject from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/EditMobitelProject';
import EditMobitelProjectHandover from './components/_dashboard/MobitelProjectDatabase/PendingTasks/HODetails/EditMobitelProjectHODetails';
import EditMobitelProjectWorkAllocation from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Assign/EditMobitelProjectAssign';
import EditMobitelProjectTeamAllocation from './components/_dashboard/MobitelProjectDatabase/PendingTasks/TeamAllocation/EditMobitelProjectTeamAllocation';
import EditMobitelProjectDependencies from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Dependencies/EditMobitelProjectDependencies';
import EditMobitelProjectLogistic from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Logistics/EditMobitelProjectLogistics';
import EditMobitelProjectPRPOProgress from './components/_dashboard/MobitelProjectDatabase/PendingTasks/PRPOProgress/EditMobitelProjectPRPOProgress';
import EditMobitelProjectImplementation from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Implementation/EditMobitelProjectImplementation';
import EditMobitelProjectAcceptance from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Acceptance/EditMobitelProjectAcceptance';
import EditMobitelProjectPayment from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Payment/EditMobitelProjectPayment';
import EditDetailsMOT from './components/_dashboard/MobitelProjectsOverview/EditDetails';
import TestDatagrid from './pages/TestDatagrid';
import Settings from './pages/Settings';
import SettingsVendorProjectsHome from './components/_dashboard/Settings/VendorProjects/VendorProjectsSetingsHome';
import SettingsMobitelProjectsHome from './components/_dashboard/Settings/MobitelProjects/MobitelProjectsSetingsHome';
import SettingsMobitelProjectsSiteEngineers from './components/_dashboard/Settings/MobitelProjects/SiteEngineers/MobitelProjectsSettingsSiteEngineers';
import SettingsMobitelProjectsSpecialTag from './components/_dashboard/Settings/MobitelProjects/SpecialTag/MobitelProjectsSettingsSpecialTag';
import SettingsMobitelProjectsDependency from './components/_dashboard/Settings/MobitelProjects/Dependency/MobitelProjectsSettingsDependency';
import SettingsMobitelProjectsSiteStatus from './components/_dashboard/Settings/MobitelProjects/SiteStatus/MobitelProjectsSettingSiteStatus';
import SettingsMobitelProjectsResponsible from './components/_dashboard/Settings/MobitelProjects/Responsible/MobitelProjectsSettingsResponsible';
import SettingsMobitelProjectsScope from './components/_dashboard/Settings/MobitelProjects/Scope/MobitelProjectsSettingsScope';
import SettingsMobitelProjectsNewRAT from './components/_dashboard/Settings/MobitelProjects/New_RAT/MobitelProjectsSettingsNew_RAT';
import SettingsMobitelProjectsSubContractor from './components/_dashboard/Settings/MobitelProjects/Sub_Contractor/MobitelProjectsSettingsSub_Contractor';

export default function Router() {
  const userRole = 'Admin';

  return useRoutes([
    { path: '/', element: <Login />, children: [{ path: 'login', element: <Login /> }] },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'home', element: <Home /> },
        { element: <Navigate to="/dashboard/app" replace /> },
        // Admin mod
        {
          path: 'app',
          element:
            userRole === 'Admin' || userRole === 'Moderator' ? (
              <DashboardApp />
            ) : (
              <Navigate to="/unauthorized" />
            )
        }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
