import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class NotificationScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{textAlign:'center', fontFamily: 'Poppins-Bold', fontSize: 32, color: '#262734'}}>Notification</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb',
        justifyContent: 'center'
    },
})