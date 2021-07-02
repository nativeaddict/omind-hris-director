import React, { Component } from 'react';
import {
    Text,
    View, 
    Image,
    StyleSheet
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default class SkeletonDetailProject extends Component{
    
    render(){
        return(                        
            <View style={styles.container}>
                <SkeletonPlaceholder>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{left: 25, marginTop: 76, width: 310, height: 70, borderRadius: 10}}/>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <View style={{left: 25, width: 90, height: 90, borderRadius: 10}}/>
                            <View style={{left: 45, width: 90, height: 90, borderRadius: 10}}/>
                            <View style={{left: 65, width: 90, height: 90, borderRadius: 10}}/>
                        </View>   
                        <View style={{left: 25, marginTop: 20, width: 310, height: 30, borderRadius: 10}}/>
                        <View style={{left: 25, marginTop: 10, width: 310, height: 30, borderRadius: 10}}/>
                        <View style={{left: 25, marginTop: 10, width: 310, height: 30, borderRadius: 10}}/>
                        <View style={{left: 25, marginTop: 10, width: 310, height: 30, borderRadius: 10}}/>
                    </View>
                </SkeletonPlaceholder> 
                 {/* Navbar */}
                 <View style={styles.rectangleBack}>
                    <Image
                        style={{position: 'absolute', width: 17, height: 17}}
                        source={require('../assets/images/arrow-back.png')}
                    />                    
                </View>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Detail Project</Text>                
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