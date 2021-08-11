import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
    FlatList,
    Dimensions,
} from 'react-native';

export default class NewsContent1Screen extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* Navbar */}
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('News')}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{width: 17, height: 17, position: 'absolute'}}
                            source={require('../assets/images/arrow-back.png')}
                        />                    
                    </View>
                </TouchableWithoutFeedback>               
                {/* Title Text */}
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('News')}>News - {this.props.navigation.getParam('title')}</Text>
                <Image
                    style={{width: 310, height: 157, alignSelf: 'center', top: 71, borderTopRightRadius: 10, borderTopLeftRadius: 10, position: 'absolute' }}
                    source={{uri: this.props.navigation.getParam('photo')}}
                />
                <ScrollView style={{width: 310, height: Dimensions.get('window').height, backgroundColor:'#fff', alignSelf:'center', top: 228, paddingBottom: 500, elevation: 3}}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, top: 10, textAlign: 'center', marginBottom: 10}}>{this.props.navigation.getParam('title')}</Text>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 10, textAlign: 'left', maxWidth: 260, top: 10, left: 25}}> Omindtech.id team - Omind News</Text>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 10, textAlign: 'left', maxWidth: 260, top: 10, left: 25}}> {this.props.navigation.getParam('date')} </Text>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, textAlign: 'left', maxWidth: 260, top: 10, textAlign: 'justify', left: 25}}>  {"\n"}{this.props.navigation.getParam('content')} </Text>
                </ScrollView>
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
    rectangleContent:{
        margin: 5,
        width: 310,
        height: 650,
        elevation: 0.7,
        borderRadius: 10,
        // resizeMode: 'center'
    },
});