import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,} from 'react-native';

export default class DetailProjectScreen extends Component{
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Detail Project</Text>
                
                {/* Company Rectangle */}
                <View style={{width: 310, height: 70, left: 25, top: 76, position: 'absolute', backgroundColor: '#FFF', elevation: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginBottom: 20 }}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 24, textAlign: 'center'}}>PT Infantry Sejahtera</Text>
                </View>

                {/* Content Rectangle */}
                <View style={{width: 310, height: 90, backgroundColor: '#f9f9fb', left: 25,  top: 166, position: 'absolute'}}>
                    <View style={{width: 90, height: 90, backgroundColor: '#FFFFFF', position: 'absolute', borderRadius: 10, elevation: 3}}>
                        <Image  source={require('../assets/images/Icon_TotalTask.png')}
                                style={{width: 30, height: 30, top: 9, left: 6, position: 'absolute'}} />
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 48, color: '#C4C4C4', position: 'absolute'}}>Total Task</Text>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 64, position: 'absolute'}}>17</Text>
                    </View>
                    <View style={{width: 90, height: 90, left: 110, backgroundColor: '#FFFFFF',position: 'absolute', borderRadius: 10, elevation: 3 }}>
                        <Image  source={require('../assets/images/Icon_Progress.png')}
                                style={{width: 30, height: 30, top: 9, left: 6, position: 'absolute'}} />
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 48, color: '#C4C4C4', position: 'absolute'}}>Progress</Text>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 64, position: 'absolute'}}>40%</Text>
                    </View>
                    <View style={{width: 90, height: 90, marginLeft: 220, backgroundColor: '#FFFFFF',position: 'absolute',  borderRadius: 10, elevation: 3}}>
                         <Image  source={require('../assets/images/Icon_Teams.png')}
                                style={{width: 30, height: 30, top: 9, left: 6, position: 'absolute'}} />
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 48, color: '#C4C4C4', position: 'absolute'}}>Teams</Text>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 64, position: 'absolute'}}>6</Text>
                    </View>
                </View>

                {/* Status Rectangle */}
                <View style={{width: 310, height: 150, left: 25, top: 276, position: 'absolute', backgroundColor: '#f9f9fb',}}>
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Pending')}>
                        <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', elevation: 3, borderRadius: 10}}> 
                            <View style={{width: 10, height: 10, left: 11, top: 10, position :'absolute', backgroundColor: '#F15A25', borderRadius: 40}}></View>
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 34, top: 5, position: 'absolute'}}>Pending</Text>
                            <View style={{width: 12, height: 12, left: 283, top: 10, backgroundColor: '#099F84', borderRadius: 40, position: 'absolute'}}></View>
                            <Image  source={require('../assets/images/arrow-next.png')} 
                                    style={{width: 8, height: 12, left: 284.5, top: 9.5}} />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Ongoing')}>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', top: 40, elevation: 3, borderRadius: 10}}> 
                        <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', elevation: 3, borderRadius: 10}}> 
                            <View style={{width: 10, height: 10, left: 11, top: 10, position :'absolute', backgroundColor: '#FBB03B', borderRadius: 40}}></View>
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 34, top: 5, position: 'absolute'}}>Ongoing</Text>
                            <View style={{width: 12, height: 12, left: 283, top: 10, backgroundColor: '#099F84', borderRadius: 40, position: 'absolute'}}></View>
                            <Image  source={require('../assets/images/arrow-next.png')} 
                                    style={{width: 8, height: 12, left: 284.5, top: 9.5}} />
                        </View>
                    </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Review')}>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', top: 80, elevation: 3, borderRadius: 10}}> 
                        <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', elevation: 3, borderRadius: 10}}> 
                            <View style={{width: 10, height: 10, left: 11, top: 10, position :'absolute', backgroundColor: '#054FFF', borderRadius: 40}}></View>
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 34, top: 5, position: 'absolute'}}>Review</Text>
                            <View style={{width: 12, height: 12, left: 283, top: 10, backgroundColor: '#099F84', borderRadius: 40, position: 'absolute'}}></View>
                            <Image  source={require('../assets/images/arrow-next.png')} 
                                    style={{width: 8, height: 12, left: 284.5, top: 9.5}} />
                        </View>

                    </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Complete')}>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', top: 120, elevation: 3, borderRadius: 10}}> 
                        <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', elevation: 3, borderRadius: 10}}> 
                            <View style={{width: 10, height: 10, left: 11, top: 10, position :'absolute', backgroundColor: '#099F84', borderRadius: 40}}></View>
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 34, top: 5, position: 'absolute'}}>Complete</Text>
                            <View style={{width: 12, height: 12, left: 283, top: 10, backgroundColor: '#099F84', borderRadius: 40, position: 'absolute'}}></View>
                            <Image  source={require('../assets/images/arrow-next.png')} 
                                    style={{width: 8, height: 12, left: 284.5, top: 9.5}} />
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
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