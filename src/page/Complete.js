import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,} from 'react-native';

export default class CompleteScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* Navbar */}
                <View style={styles.rectangleBack}>
                    <Image
                        style={{width: 17, height: 17, position: 'absolute'}}
                        source={require('../assets/images/arrow-back.png')}
                    />                    
                </View>               
                {/* Title Text */}
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('DetailProject')}>Complete</Text>
            
                <View style={{width: 203, height: 24, left: 32, top: 76, position: 'absolute'}}>
                    <View style={{width: 10, height: 10, top: 8, position :'absolute', backgroundColor: '#099F84', borderRadius: 40}}></View>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 21, position: 'absolute'}}>Complete Task</Text>
                </View>

                <View style={{width: 310, height: 70, left: 25, top: 110, position: 'absolute'}}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12, top: 10, left: 14, position: 'absolute'}}>Production Team</Text>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, top: 28, left: 14, position: 'absolute'}}>Create UI/UX Design</Text>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, top: 50, left: 14, position: 'absolute'}}>Complete at Monday, April 27</Text>
                    <View style={{width: 50, height: 13, top: 12, left: 250, backgroundColor: '#FBB03B', position: 'absolute', borderRadius: 2}}></View>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, color: '#FFF', left: 253, top: 10, position: 'absolute'}}>Warning</Text>
                </View>
                <View style={{width: 310, height: 70, left: 25, top: 190, position: 'absolute'}}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12, top: 10, left: 14, position: 'absolute'}}>Production Team</Text>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, top: 28, left: 14, position: 'absolute'}}>Android API Integration</Text>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, top: 50, left: 14, position: 'absolute'}}>Complete at Monday, April 27</Text>
                    <View style={{width: 50, height: 13, top: 12, left: 250, backgroundColor: '#FBB03B', position: 'absolute', borderRadius: 2}}></View>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, color: '#FFF', left: 253, top: 10, position: 'absolute'}}>Warning</Text>
                </View>
                <View style={{width: 310, height: 70, left: 25, top: 270, position: 'absolute'}}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12, top: 10, left: 14, position: 'absolute'}}>Production Team</Text>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, top: 28, left: 14, position: 'absolute'}}>IOS API Integration</Text>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, top: 50, left: 14, position: 'absolute'}}>Complete at Monday, April 27</Text>
                    <View style={{width: 50, height: 13, top: 12, left: 250, backgroundColor: '#054FFF', position: 'absolute', borderRadius: 2}}></View>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, color: '#FFF', left: 263, top: 10, position: 'absolute', textAlign: 'center'}}>Safe</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb',
    },
    rectangleBack:{
        position: 'absolute',
        justifyContent:'center',
        width: 15,
        height: 15,
        top: 23,
        left: 22,       
        backgroundColor: '#f9f9fb',
        borderRadius: 2,
    },
    textNavigation:{
        position: 'absolute',
        left: 47,
        top: 21,
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,    
        color: '#262734',
    },
}); 