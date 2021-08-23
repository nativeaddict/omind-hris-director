import React, { Component, useState, useEffect} from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
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
import DivisionScreen from './Division';
import HRScreen from './HR';
import ProductionScreen from './Production';
import DevOpsScreen from './DevOps';
import DesignScreen from './Design';
import MarketingScreen from './Marketing';
import EmployeeSummaryScreen from './EmployeeSummary';
import DetailEmployeeScreen from './DetailEmployee';
import AttendanceRecapScreen from './AttendanceRecap';
import ProjectStatusScreen from './ProjectStatus';
import FAQScreen from './FAQ';
import RulesScreen from './Rules';
import DetailProjectScreen from './DetailProject';
import PendingScreen from './Pending';
import OngoingScreen from './Ongoing';
import ReviewScreen from './Review';
import CompleteScreen from './Complete';
import NewsContent1Screen from './NewsContent1';
import AsyncStorage from '@react-native-community/async-storage';

const Main = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if(value==null){
                AsyncStorage.setItem('alreadyLaunched','true');
                AsyncStorage.setItem('launchCount', '0');
                setIsFirstLaunch(true);
            }
            else{
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if(isFirstLaunch==null){
        return(null);
    }
    else if(isFirstLaunch==true){
        return <MainContainer />
    }
    else{
        return <MainContainer2 />
    }
   
}

const MainNavigator = createStackNavigator({
    // Every screen in this app, Onboarding
    Splash: {screen: SplashScreen},
    Onboarding: {screen: OnboardingScreen},
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    News: {screen: NewsScreen},
    Notification: {screen: NotificationScreen},
    Profile: {screen: ProfileScreen},
    Division: {screen: DivisionScreen},
    HR: {screen: HRScreen},
    Production: {screen: ProductionScreen},
    DevOps: {screen: DevOpsScreen},
    Design: {screen: DesignScreen},
    Marketing: {screen: MarketingScreen},
    EmployeeSummary: {screen: EmployeeSummaryScreen},
    DetailEmployee: {screen: DetailEmployeeScreen},
    AttendanceRecap: {screen: AttendanceRecapScreen},
    ProjectStatus: {screen: ProjectStatusScreen},
    FAQ: {screen: FAQScreen},
    Rules: {screen: RulesScreen},
    DetailProject: {screen: DetailProjectScreen},
    Pending: {screen: PendingScreen},
    Ongoing: {screen: OngoingScreen},
    Review: {screen: ReviewScreen},
    Complete: {screen: CompleteScreen},
    NewsContent1: {screen: NewsContent1Screen},

}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const MainScreen = createStackNavigator({
    // Every screen in this apps 
    Splash: {screen: SplashScreen},
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    News: {screen: NewsScreen},
    Notification: {screen: NotificationScreen},
    Profile: {screen: ProfileScreen},
    Division: {screen: DivisionScreen},
    HR: {screen: HRScreen},
    Production: {screen: ProductionScreen},
    DevOps: {screen: DevOpsScreen},
    Design: {screen: DesignScreen},
    Marketing: {screen: MarketingScreen},
    EmployeeSummary: {screen: EmployeeSummaryScreen},
    DetailEmployee: {screen: DetailEmployeeScreen},
    AttendanceRecap: {screen: AttendanceRecapScreen},
    ProjectStatus: {screen: ProjectStatusScreen},
    FAQ: {screen: FAQScreen},
    Rules: {screen: RulesScreen},
    DetailProject: {screen: DetailProjectScreen},
    Pending: {screen: PendingScreen},
    Ongoing: {screen: OngoingScreen},
    Review: {screen: ReviewScreen},
    Complete: {screen: CompleteScreen},
    NewsContent1: {screen: NewsContent1Screen},
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const MainContainer = createAppContainer(MainNavigator);
const MainContainer2 = createAppContainer(MainScreen);

export default Main;
