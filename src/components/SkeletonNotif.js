import React, { Component } from 'react';
import {
    Text,
    View, 
    StyleSheet
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default class SkeletonNotif extends Component{
    
    render(){
        return(                        
            <View style={styles.container}>
                <SkeletonPlaceholder speed={650}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{width: 290, height: 50, borderRadius: 10, marginBottom: 10, top: 10, left: 10}}/>
                        <View style={{width: 290, height: 50, borderRadius: 10, marginBottom: 10, top: 10, left: 10}}/>
                        <View style={{width: 290, height: 50, borderRadius: 10, marginBottom: 10, top: 10, left: 10}}/>
                        <View style={{width: 290, height: 50, borderRadius: 10, marginBottom: 10, top: 10, left: 10}}/>
                        <View style={{width: 290, height: 50, borderRadius: 10, marginBottom: 10, top: 10, left: 10}}/>
                    </View>
                </SkeletonPlaceholder>                 
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textMenuActivity: {
        position: 'absolute',
        left: 55,
        top: 22,       
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: '#fff'
    },
    textMenuHome: {        
        textAlign: 'center',
        color: 'rgba(38, 39, 52, 0.4)',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21

    },
    textMenuNotification: {
        position: 'absolute',
        left: 245,
        top: 22,      
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(38, 39, 52, 0.4)'
    },
    selectionMenuActivity:{
        justifyContent: 'center',
        position: 'absolute',
        width: 70,
        height: 16,
        left: 49,
        top: 25,
        backgroundColor: '#099f84',
        borderRadius: 50,
    },
})