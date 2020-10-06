import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList128578Navigator from '../features/ArticleList128578/navigator';
import ArticleList128577Navigator from '../features/ArticleList128577/navigator';
import BlankScreen0128574Navigator from '../features/BlankScreen0128574/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList128578: { screen: ArticleList128578Navigator },
ArticleList128577: { screen: ArticleList128577Navigator },
BlankScreen0128574: { screen: BlankScreen0128574Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
