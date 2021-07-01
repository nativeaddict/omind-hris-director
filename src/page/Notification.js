import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default class NotificationScreen extends Component{
    
    render(){
        return(            
            <View style={styles.container}>
                {/* <SkeletonPlaceholder>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{marginTop: 55, width: 75, height: 75, borderRadius: 75, alignSelf: 'center'}}/>
                        <View style={{marginTop: 15, width: 210, height: 30, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 15, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 5, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 5, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 5, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 5, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 5, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 15, width: 270, height: 30, borderRadius: 10, alignSelf: 'center'}}/>
                        <View style={{marginTop: 20, width: 110, height: 25, borderRadius: 5, left: 25}}/>
                        <View style={{marginTop: 5, width: 310, height: 40, borderRadius: 10, left: 25}}/>
                    </View>
                </SkeletonPlaceholder>  */}
                <Text style={styles.textMenuNews} onPress={()=>this.props.navigation.navigate('News')}>News</Text>
                <View style={styles.selectionMenuHome}>
                    <Text style={styles.textMenuHome}>Home</Text>
                </View>
                <Text style={styles.textMenuNotification} onPress={()=>this.props.navigation.navigate('Notification')}>Notification</Text>                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb',
    },
    textMenuNews: {
        position: 'absolute',
        left: 75,
        top: 22,       
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(38, 39, 52, 0.4)'
    },
    textMenuHome: {   
        bottom: 1.5,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21
    },
    textMenuNotification: {
        position: 'absolute',
        left: 240,
        top: 22,      
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(38, 39, 52, 0.4)'
    },
    selectionMenuHome:{
        position: 'absolute',
        width: 56,
        height: 16,
        left: 152,
        top: 24,
        backgroundColor: '#099f84',
        borderRadius: 50,
    },
})