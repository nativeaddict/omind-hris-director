import React, { Component } from 'react';
import {
    Text,
    View, 
    Image,
    StyleSheet
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default class SkeletonProfiile extends Component{
    
    render(){
        return(                        
            <View style={styles.container}>
                <SkeletonPlaceholder>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{left: 25, marginTop: 75, width: 310, height: 105, borderRadius: 10}}/>  
                        <View style={{left: 25, marginTop: 40, width: 310, height: 30, borderRadius: 5}}/>
                        <View style={{left: 25, marginTop: 13, width: 310, height: 30, borderRadius: 5}}/>
                        <View style={{left: 25, marginTop: 13, width: 310, height: 30, borderRadius: 5}}/>
                        <View style={{left: 25, marginTop: 13, width: 310, height: 30, borderRadius: 5}}/>
                        <View style={{left: 25, marginTop: 13, width: 310, height: 30, borderRadius: 5}}/>
                        <View style={{alignSelf: 'center', marginTop: 20, width: 170, height: 25, borderRadius: 5}}/>
                    </View>
                </SkeletonPlaceholder> 
                 {/* Navbar */}
                 <View style={styles.rectangleBack}>
                    <Image
                        style={{position: 'absolute', width: 17, height: 17}}
                        source={require('../assets/images/arrow-back.png')}
                    />                    
                </View>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Profile</Text>                
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