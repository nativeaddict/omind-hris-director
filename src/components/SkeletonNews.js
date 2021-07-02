import React, { Component } from 'react';
import {
    Text,
    View, 
    Image,
    StyleSheet
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default class SkeletonNews extends Component{
    
    render(){
        return(                        
            <View style={styles.container}>
                <View style={styles.selectionMenuNews}>
                    <Text style={styles.textMenuNews}>News</Text>
                 </View>
                 <Text style={styles.textMenuHome} onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                 <Text style={styles.textMenuNotification} onPress={()=>this.props.navigation.navigate('Notification')}>Notification</Text>
                <SkeletonPlaceholder>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{left: 25, marginTop: 50, width: 150, height: 25, borderRadius: 5}}/>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{left: 25, width: 90, height: 100, borderBottomEndRadius: 50, borderTopEndRadius: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10}}/>
                            <View style={{left: 35, width: 210, height: 100, borderRadius: 10}}/>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{left: 25, width: 90, height: 100, borderBottomEndRadius: 50, borderTopEndRadius: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10}}/>
                            <View style={{left: 35, width: 210, height: 100, borderRadius: 10}}/>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{left: 25, width: 90, height: 100, borderBottomEndRadius: 50, borderTopEndRadius: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10}}/>
                            <View style={{left: 35, width: 210, height: 100, borderRadius: 10}}/>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{left: 25, width: 90, height: 100, borderBottomEndRadius: 50, borderTopEndRadius: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10}}/>
                            <View style={{left: 35, width: 210, height: 100, borderRadius: 10}}/>
                        </View>                        
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
    textMenuNews: {     
        bottom: 1.5,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: '#fff'
    },
    textMenuHome: {  
        top: 22,
        textAlign: 'center',
        color: 'rgba(38, 39, 52, 0.4)',
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
    selectionMenuNews:{
        position: 'absolute',
        width: 56,
        height: 16,
        left: 75,
        top: 24,
        backgroundColor: '#099f84',
        borderRadius: 50,
    },
})