import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,} from 'react-native';

export default class PendingScreen extends Component{
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('DetailProject')}>Pending</Text>
            
                

                
                <View style={{width: 203, height: 24, left: 32, top: 76, position: 'absolute'}}>
                    <View style={{width: 10, height: 10, top: 8, position :'absolute', backgroundColor: '#F15A25', borderRadius: 40}}></View>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 21, position: 'absolute'}}>Pending Task</Text>
                </View>

                {/* Data List */}
                <FlatList 
                    style={{top: 120, left : 25,}}
                    contentContainerStyle={{paddingBottom : 200}}
                    //showsVerticalScrollIndicator={false}
                    data={[
                        {
                            id : 'TSK01',
                            division : 'Production Team',
                            task : 'Create UI/UX Design',
                            deadline : 'Complete at Monday, April 27',
                            status : 'Warning',
                        },

                        {
                            id : 'TSK02',
                            division : 'Production Team',
                            task : 'Android API Integration',
                            deadline : 'Complete Saturday, April 25',
                            status : 'Safe',   
                        },
                        
                        {
                            id : 'TSK03',
                            division : 'Production Team',
                            task : 'IOS API Integration',
                            deadline : 'Complete at Wednesday, June 28',
                            status : 'Warning'
                        },
                    ]}
                renderItem={({item}) =>
                <View style={{width: 310, height: 70, borderRadius : 10, marginBottom: 10, elevation : 0.5, backgroundColor: '#FFF'}}>
                    <View style={{width: 50, height: 13, top: 12, left: 250, backgroundColor: '#FBB03B', position: 'absolute', borderRadius: 2, alignItems : 'center', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, color: '#FFF', position: 'absolute'}}>
                            {item.status}
                        </Text>
                    </View> 
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12, top: 10, left: 14, position: 'absolute'}}>
                        {item.division}
                    </Text>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, top: 28, left: 14, position: 'absolute'}}>
                        {item.task}
                    </Text>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, top: 50, left: 14, position: 'absolute'}}>
                        {item.deadline}
                    </Text>
                </View>
                }
                />


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