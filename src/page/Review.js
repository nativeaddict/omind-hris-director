import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    Image,
    FlatList,
} from 'react-native';

export default class ReviewScreen extends Component{
    constructor(props){
        super(props);
        this.state = { 
            isLoading: false,
            reviewtask: this.props.navigation.state.params.review
        }
    }
    render(){
        // console.log(this.state.reviewtask)
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('DetailProject')}>Review</Text>
            
                <View style={{width: 203, height: 24, left: 32, top: 76, position: 'absolute'}}>
                    <View style={{width: 10, height: 10, top: 8, position :'absolute', backgroundColor: '#054FFF', borderRadius: 40}}></View>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 21, position: 'absolute'}}>Review Task</Text>
                </View>

                <FlatList 
                    style={{top: 120, left : 25,}}
                    contentContainerStyle={{paddingBottom : 200}}                   
                    data={this.state.reviewtask}
                    keyExtractor = {(item, index) => index}
                    renderItem = {({item}) => {
                        // console.log('ITEM', item);
                        return <> 
                        <View style={{width: 310, height: 70, borderRadius : 10, marginBottom: 10, elevation : 1, backgroundColor: '#FFF'}}>
                            <View style={{width: 50, height: 13, top: 12, left: 250, backgroundColor: '#f5f9fa', position: 'absolute', borderRadius: 3, alignItems : 'center', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, color: '#262734', position: 'absolute'}}>
                                    {item.status}
                                </Text>
                            </View> 
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12, top: 10, left: 14, position: 'absolute'}}>
                                Production Division
                            </Text>
                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, top: 28, left: 14, position: 'absolute'}}>
                                {item.desc}
                            </Text>
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10, top: 50, left: 14, position: 'absolute'}}>
                                {item.duedate}
                            </Text>
                        </View>
                        </>   
                    }}
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