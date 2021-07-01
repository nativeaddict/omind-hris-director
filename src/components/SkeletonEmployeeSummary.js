import React, { Component } from 'react';
import {
    Text,
    View, 
    Image,
    StyleSheet
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default class SkeletonEmployeeSummary extends Component{
    
    render(){
        return(                        
            <View style={styles.container}>
                <SkeletonPlaceholder>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row', marginTop: 80}}>
                            <View style={{left: 25, width: 60, height: 60, borderRadius: 50}}/>
                            <View style={{flexDirection: 'column'}}>
                                <View style={{left: 45, width: 210, height: 25, borderRadius: 5}}/>
                                <View style={{marginTop: 5, left: 45, width: 210, height: 25, borderRadius: 5}}/>
                            </View>                        
                        </View> 
                        <View style={{flexDirection: 'row', marginTop: 40}}>
                            <View style={{left: 25, width: 60, height: 60, borderRadius: 50}}/>
                            <View style={{flexDirection: 'column'}}>
                                <View style={{left: 45, width: 210, height: 25, borderRadius: 5}}/>
                                <View style={{marginTop: 5, left: 45, width: 210, height: 25, borderRadius: 5}}/>
                            </View>                        
                        </View>  
                        <View style={{flexDirection: 'row', marginTop: 40}}>
                            <View style={{left: 25, width: 60, height: 60, borderRadius: 50}}/>
                            <View style={{flexDirection: 'column'}}>
                                <View style={{left: 45, width: 210, height: 25, borderRadius: 5}}/>
                                <View style={{marginTop: 5, left: 45, width: 210, height: 25, borderRadius: 5}}/>
                            </View>                        
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 40}}>
                            <View style={{left: 25, width: 60, height: 60, borderRadius: 50}}/>
                            <View style={{flexDirection: 'column'}}>
                                <View style={{left: 45, width: 210, height: 25, borderRadius: 5}}/>
                                <View style={{marginTop: 5, left: 45, width: 210, height: 25, borderRadius: 5}}/>
                            </View>                        
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 40}}>
                            <View style={{left: 25, width: 60, height: 60, borderRadius: 50}}/>
                            <View style={{flexDirection: 'column'}}>
                                <View style={{left: 45, width: 210, height: 25, borderRadius: 5}}/>
                                <View style={{marginTop: 5, left: 45, width: 210, height: 25, borderRadius: 5}}/>
                            </View>                        
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 40}}>
                            <View style={{left: 25, width: 60, height: 60, borderRadius: 50}}/>
                            <View style={{flexDirection: 'column'}}>
                                <View style={{left: 45, width: 210, height: 25, borderRadius: 5}}/>
                                <View style={{marginTop: 5, left: 45, width: 210, height: 25, borderRadius: 5}}/>
                            </View>                        
                        </View>
                    </View>
                </SkeletonPlaceholder> 
                 {/* Navbar */}
                 <View style={styles.rectangleBack}>
                    <Image
                        style={{position: 'absolute', width: 17, height: 17}}
                        source={require('../assets/images/arrow-back.png')}
                    />                    
                </View>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Employee Summary</Text>                
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