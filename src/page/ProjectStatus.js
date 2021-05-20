import React, { Component } from 'react';
import {View,
        Text,
        StyleSheet,
        Image,
        TouchableOpacity,
        TouchableWithoutFeedback,} from 'react-native';

export default class ProjectStatusScreen extends Component{
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Project Status</Text>

                {/* RectangleContent */}
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('DetailProject')}>
                    <View style={styles.RectangleContent}>
                        <View style={styles.RectangleCompany}>
                            <Text style={styles.companyName}>PT Infantry Sejahtera</Text>
                        </View>
                        <Text style={styles.titleText}>Infantry Mobile Apps</Text>
                        <View style={styles.complementText}>
                            <Text style={styles.Duedate}>Due date May 2021</Text>
                            <Text style={styles.textDetails}>Details</Text>
                            <Image source={require('../assets/images/arrow-next.png')}
                                style={styles.arrowStyle} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.RectangleContent}>
                    <View style={styles.RectangleCompany}>
                        <Text style={styles.companyName}>PT Sentosa 47</Text>
                    </View>
                    <Text style={styles.titleText}>Infantry Mobile Apps</Text>
                    <View style={styles.complementText}>
                        <Text style={styles.Duedate}>Due date May 2021</Text>
                        <Text style={styles.textDetails}>Details</Text>
                        <Image source={require('../assets/images/arrow-next.png')}
                               style={styles.arrowStyle} />
                    </View>
                </View>
                <View style={styles.RectangleContent}>
                    <View style={styles.RectangleCompany}>
                        <Text style={styles.companyName}>PT Aman Jaya</Text>
                    </View>
                    <Text style={styles.titleText}>Infantry Mobile Apps</Text>
                    <View style={styles.complementText}>
                        <Text style={styles.Duedate}>Due date May 2021</Text>
                        <Text style={styles.textDetails}>Details</Text>
                        <Image source={require('../assets/images/arrow-next.png')}
                               style={styles.arrowStyle} />
                    </View>
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
    RectangleContent:{
        width: 310, 
        height: 70, 
        borderRadius: 10, 
        backgroundColor: '#FFF', 
        elevation: 3, 
        left: 25, 
        top: 76, 
        marginBottom: 10
    },
    companyName:{
        fontFamily: 'Poppins-Medium', 
        fontSize: 12, 
        textAlign: 'center'
    },
    RectangleCompany:{
        width: 95, 
        height: 17, 
        top: 9, 
        left: 14, 
        backgroundColor: '#099F80', 
        borderRadius: 5, 
        marginBottom: 7
    },
    titleText:{
        left: 14, 
        fontFamily: 'Poppins-Medium', 
        fontSize: 18
    },
    Duedate:{
        fontFamily:'Poppins-Regular', 
        fontSize: 10, 
        left: 14,
    },
    textDetails:{
        fontFamily: 'Poppins-Regular', 
        fontSize: 10, 
        paddingLeft: 140
    },
    arrowStyle:{
        width: 8, 
        height: 8, 
        top: 4, 
        right: 16
    },
    complementText:{
        width: 310, 
        height: 15, 
        backgroundColor: '#FFF', 
        top: 0, 
        borderRadius: 10,
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    }
});