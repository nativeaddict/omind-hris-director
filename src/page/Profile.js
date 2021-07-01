import React, { Component } from 'react';
import {
    View, 
    Image, 
    Text, 
    TouchableOpacity, 
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

export default class ProfileScreen extends Component{
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Profile</Text>

                {/* RectangleBio */}
                <View style={styles.BioRectangle}>
                    {/* PhotoProfile */}
                    <View style={styles.PhotoProf}>
                        <Image style={{width: 70, height: 70}}
                                source={require('../assets/images/Photo_Barid.png')} />
                    </View>
                {/* ProfileName */}
                <Text style={styles.ProfileName}>Barid Rais</Text>
                
                {/* ProfileRole */}
                <Text style={styles.ProfileRole} onPress={()=>{
                    AsyncStorage.removeItem('token');
                    this.props.navigation.replace('Login')
                }}>Chief Executive Officer</Text>
                </View>

                {/* RectangleContent */}
                <View style={styles.RectangleContent}>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6 }}>
                         <Text style={styles.TextLeft}>Name</Text>
                         <Text style={[styles.TextRight,{paddingRight: 90}]}>Barid Rais</Text>
                    </View>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6}}>
                         <Text style={styles.TextLeft}>Email</Text>
                         <Text style={[styles.TextRight,{paddingRight: 18}]}>barid@omindtech.id</Text>
                    </View>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6}}>
                         <Text style={styles.TextLeft}>Phone</Text>
                         <Text style={[styles.TextRight,{paddingRight: 42}]}>08223344556677</Text>
                    </View>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6}}>
                         <Text style={styles.TextLeft}>Date of Birth</Text>
                         <Text style={[styles.TextRight,{paddingRight: 51}]}>01 January 2021</Text>
                    </View>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6}}>
                         <Text style={styles.TextLeft}>Address</Text>
                         <Text style={[styles.TextRight,{paddingRight: 33}]}>Jakarta 99, Jaksel</Text>
                    </View>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6}}>
                         <Text style={styles.TextLeft}>Hobby</Text>
                         <Text style={[styles.TextRight,{paddingRight: 99}]}>Football</Text>
                    </View>
                </View>

                
            </View>
        );
    }
}

const styles=StyleSheet.create({
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
    BioRectangle:{
        width: 310, 
        height: 102, 
        left: 25, 
        top: 75, 
        backgroundColor: '#FFF', 
        borderRadius: 10, 
        position: 'absolute',
        elevation: 3
    },
    PhotoProf:{
        backgroundColor: '#099F84', 
        borderRadius: 40, 
        width: 70, 
        height: 70, 
        left: 18, 
        top: 16,
    },  
    ProfileName:{
        fontFamily: 'Poppins-Bold', 
        fontSize: 14, 
        left:128 , 
        top: -40
    },
    ProfileRole:{
        fontSize: 14, 
        fontFamily: 'Poppins-Medium', 
        left: 102, 
        top: -45
    },
    RectangleContent:{
        backgroundColor: '#FFF', 
        width: 310, 
        height: 241, 
        left: 25, 
        top: 216, 
        position: 'absolute', 
        elevation: 3
    },
    TextLeft:{
        top: 8, 
        fontFamily: 'Poppins-Medium', 
        fontSize: 13, 
        paddingLeft: 5
    },
    TextRight:{
        top: 8, 
        fontFamily: 'Poppins-Medium', 
        fontSize: 13, 
        
    },
})