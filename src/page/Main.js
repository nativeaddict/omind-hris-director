import React from 'react';
import {} from 'react-native';
// Install this library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './Splash';
import OnboardingScreen from './Onboarding'; 
import LoginScreen from './Login';
import HomeScreen from './Home';
import NewsScreen from './News';
import NotificationScreen from './Notification';
import ProfileScreen from './Profile';
import EmployeeSummaryScreen from './EmployeeSummary';
import DetailEmployeeScreen from './DetailEmployee';
import ProjectStatusScreen from './ProjectStatus';
import FAQScreen from './FAQ';
import RulesScreen from './Rules';

const MainNavigator = createStackNavigator({
    // Every screen in this apps 
    Splash: {screen: SplashScreen},
    Onboarding: {screen: OnboardingScreen},
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    News: {screen: NewsScreen},
    Notification: {screen: NotificationScreen},
    Profile: {screen: ProfileScreen},
    EmployeeSummary: {screen: EmployeeSummaryScreen},
    DetailEmployee: {screen: DetailEmployeeScreen},
    ProjectStatus: {screen: ProjectStatusScreen},
    FAQ: {screen: FAQScreen},
    Rules: {screen: RulesScreen}
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(
    MainNavigator
);
