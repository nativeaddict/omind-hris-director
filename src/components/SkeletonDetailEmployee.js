import React, { Component } from 'react';
import {
    Text,
    View, 
    Image,
    StyleSheet
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default class SkeletonDetailEmployee extends Component{
    
    render(){
        return(                        
            <View style={styles.container}>
                <SkeletonPlaceholder>
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
                        <View style={{marginTop: 65, width: 110, height: 25, borderRadius: 5, left: 25}}/>
                        <View style={{marginTop: 5, width: 310, height: 40, borderRadius: 10, left: 25}}/>
                    </View>
                </SkeletonPlaceholder>
                 {/* Navbar */}
                 <View style={styles.rectangleBack}>
                    <Image
                        style={{position: 'absolute', width: 17, height: 17}}
                        source={require('../assets/images/arrow-back.png')}
                    />                    
                </View>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('EmployeeSummary')}>Employee Profile</Text>                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    rectangleBack:{
        position: 'absolute',
        justifyContent:'center',
        width: 15,
        height: 15,
        top: 23,
        left: 22,       
        backgroundColor: '#f2f2f2',
        borderRadius: 2,
    },
    textNavigation:{
        position: 'absolute',
        left: 47,
        top: 21,
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,    
        color: '#262734'
    },
})