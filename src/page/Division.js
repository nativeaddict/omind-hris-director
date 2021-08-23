import React, {Component} from 'react';
import {
    View, 
    Text,     
    Image,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import axios from 'axios';
// import SkeletonEmployeeSummary from '../components/SkeletonEmployeeSummary';

export default class DivisionScreen extends Component{
    constructor(props){
        super(props)
        this.state = { 
            employee: [],
            isLoading: true,
        };
    }
    
    render(){      
        return(
            <View style={styles.container}>
                {/* Navbar */}
                <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Home')}}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{position: 'absolute', width: 17, height: 17}}
                            source={require('../assets/images/arrow-back.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Division</Text>
                {/* Division */}                
                <FlatList
                    style={{top: 63, left: 25}}
                    contentContainerStyle={{paddingBottom: 95}}
                    showsVerticalScrollIndicator={false}
                    data={[
                        {
                            id: 'HR',
                            icon: require('../assets/images/icon_hr.png'),
                            name: 'Human Resource',
                        },
                        {
                            id: 'Production',
                            icon: require('../assets/images/icon_production.png'),
                            name: 'Production',
                        },
                        {
                            id: 'DevOps',
                            icon: require('../assets/images/icon_devops.png'),
                            name: 'Dev Ops',
                        },
                        {
                            id: 'Design',
                            icon: require('../assets/images/icon_design.png'),
                            name: 'Design',
                        },
                        {
                            id: 'Marketing',
                            icon: require('../assets/images/icon_marketing.png'),
                            name: 'Marketing',
                        }
                    ]}
                    keyExtractor={(item, index) => index.toString()}              
                    renderItem={({item}) =>
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate(item.id)}>
                        <View style={styles.rectangleEmployee}>                            
                            <Image style={{width: 60, height: 60, marginLeft: 15, marginTop: 10}} source={item.icon}/>
                            <Text style={{marginTop: -45, marginLeft: 85, fontFamily: 'Poppins-Bold', fontSize: 18, color: '#262734'}}> 
                                {item.name} 
                            </Text>
                            <Text style={{alignSelf: 'flex-end', marginRight: 35, fontFamily: 'Poppins-Regular', fontSize: 10}}>See More</Text>
                            <Image
                                style={{width: 12, height: 12, marginTop: -15, marginRight: 15, alignSelf: 'flex-end'}}
                                source={require('../assets/images/arrow-next2.png')}
                            />
                        </View>                    
                    </TouchableWithoutFeedback>                
                    }
                    />               
                </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
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
    rectangleEmployee:{
        marginBottom: 10, 
        backgroundColor: '#fff',
        width: 310,
        height: 80,       
        borderRadius: 10, 
        elevation: 0.7,
    },
})