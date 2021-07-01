import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default class SkeletonHome extends Component{
    
    render(){
        return(            
            <View style={styles.container}>
                <SkeletonPlaceholder>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row', marginTop: 80}}>
                            <View style={{left: 25, width: 215, height: 25, borderRadius: 5}}/>
                            <View style={{left: 95, width: 25, height: 25, borderRadius: 5}}/>
                        </View>   
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <View style={{left: 25, width: 150, height: 100, borderRadius: 10}}/>
                            <View style={{left: 35, width: 150, height: 100, borderRadius: 10}}/>
                        </View> 
                        <View style={{marginTop: 20, left: 25, width: 100, height: 25, borderRadius: 5}}/>
                        <View style={{flexDirection: 'row', marginTop: 5}}>
                            <View style={{left: 25, width: 100, height: 100, borderBottomEndRadius: 50, borderTopEndRadius: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10}}/>    
                            <View style={{left: 35, width: 200, height: 100, borderRadius: 10}}/>    
                        </View>   
                        <View style={{marginTop: 20, left: 25, width: 100, height: 25, borderRadius: 5}}/>
                        <View style={{flexDirection: 'column', marginTop: 5}}>
                            <View style={{left: 25, width: 310, height: 70, borderRadius: 10}}/>    
                            <View style={{marginTop: 10, left: 25, width: 310, height: 70, borderRadius: 10}}/>    
                        </View> 
                    </View>
                </SkeletonPlaceholder> 
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
        backgroundColor: '#fff',
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