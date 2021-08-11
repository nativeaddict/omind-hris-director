import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
// Install this library
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';
import OneSignal from 'react-native-onesignal';

export default class SplashScreen extends Component{
    constructor(props){
        super();
    }

    componentDidMount(){
        OneSignal.setLogLevel(6, 0);
        OneSignal.setAppId("c9c53e9e-baa4-479d-ac74-31709974fb87");
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.heading1Text}>HRIS For Director</Text>
            <Text style={styles.heading2Text}>PT Omind Muda Berkarya Indonesia</Text>
            <LottieView 
                style={{width: '50%', alignSelf: 'center'}}
                source={require('../assets/splash.json')} 
                autoPlay 
                loop={false}
                speed={1}
                onAnimationFinish = {()=>{ 
                    AsyncStorage.getItem('launchCount').then(value => {
                        if(parseInt(value) < 1){
                            AsyncStorage.setItem('launchCount', ''+(parseInt(value) + 1))
                            this.props.navigation.replace('Onboarding');
                        }
                        else{
                            AsyncStorage.getItem('token').then(value => {
                                if(value){
                                    this.props.navigation.replace('Home');
                                }
                                else{
                                    this.props.navigation.replace('Login');
                                }
                            });
                        }
                    });
            }}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#099F84'
    },
    heading1Text:{
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'center',
        fontSize: 36,
        fontFamily: 'Poppins-Black',
        color: '#fff'
    },
    heading2Text:{
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#fff'
    }
})
