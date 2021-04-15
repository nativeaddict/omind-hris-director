import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
// Install this library
import LottieView from 'lottie-react-native';

export default class SplashScreen extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.heading1Text}>HRIS For Employee</Text>
            <Text style={styles.heading2Text}>PT Omind Muda Berkarya Indonesia</Text>
            <LottieView 
                style={{width: '50%', alignSelf: 'center'}}
                source={require('../assets/splash.json')} 
                autoPlay 
                loop={false}
                speed={0.5}
                onAnimationFinish = {()=>{  
                this.props.navigation.replace('Onboarding');
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