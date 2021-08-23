import React, { Component } from 'react';
import {
    Text, 
    View, 
    Image, 
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
    } 
from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import SkeletonHome from '../components/SkeletonHome';

export default class HomeScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            meeting: [], 
            isLoading: false,
            error: null 
        }
    }
    componentDidMount(){
        this.getUser();
        this.getMeeting();
    }
    getUser = async () => {
        this.setState({isLoading: true})
        let token = await AsyncStorage.getItem('token');
        axios.get('http://hris.omindtech.id/api/profile-ceo', {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>{
            res = res.data;
            this.setState({
                users: res.data,
                isLoading: false
            });
        })
        .catch(error => 
            this.setState({
                error,
                isLoading: false
        }))
    }
    getMeeting = async()=> {
        this.setState({isLoading: true})
        let token = await AsyncStorage.getItem('token');
        axios.get('http://hris.omindtech.id/api/agenda-ceo', {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>{
            res = res.data;
            let temp_data = [];
            temp_data = res.data.map(v => {
                return{
                    name: v.jenis_agenda,
                    description: v.judul_agenda,
                    timestamp: v.tgl_agenda,
                }
            })
            this.setState({
                meeting: temp_data,
                isLoading: false
            });
        })
        .catch(error => 
            this.setState({
                error,
                isLoading: false
        }))
    }
    render(){ 
        if(this.state.isLoading){
            return<SkeletonHome/>
        }
        else{
            return(            
                <View style={styles.container}>
                    {/* Navbar */}
                    <Text style={styles.textMenuNews} onPress={()=>this.props.navigation.navigate('News')}>News</Text>
                    <View style={styles.selectionMenuHome}>
                        <Text style={styles.textMenuHome}>Home</Text>
                    </View>
                    <Text style={styles.textMenuNotification} onPress={()=>this.props.navigation.navigate('Notification')}>Notification</Text>
                    {/* Name */}   
                    <Text style={styles.textNameHeading} 
                    onPress={()=>this.props.navigation.navigate('Profile')} >Hello, {this.state.users.nama}!</Text>
                    {/* Profile Picture */}
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Profile')}>
                        <Image 
                            style={styles.iconProfilePicture}
                            source={{uri: this.state.users.foto}} 
                        />
                    </TouchableWithoutFeedback>    
                    {/* Emp. summary */}
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Division')}>
                        <View style={styles.rectangleEmployeeSummary}>
                            <Image 
                                style={{top: 10, left: 10, width: 65, height: 80}}
                                source={require('../assets/images/Icon_EmployeeSummary.png')}
                            />
                            <Text style={{bottom: 45, left: 80, fontFamily: 'Poppins-Bold', fontSize: 12}}>Employee{'\n'}Summary</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    {/* Project Status */}
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('ProjectStatus')}>
                        <View style={styles.rectangleProjectStatus}>
                            <Image
                                style={{top: 10, left: 10, width: 65, height: 80}}
                                source={require('../assets/images/Icon_ProjectStatus.png')}
                            />
                            <Text style={{bottom: 45, left: 80, fontFamily: 'Poppins-Bold', fontSize: 12}}>Project{'\n'}Status</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    {/* Meeting */}
                    <Text style={styles.textMeetingHeading}>Meeting</Text>
                    {/* Flatlist Meeting */}
                    <FlatList
                        style={{left: 25, top: 269, maxHeight: 112}}
                        contentContainerStyle={{paddingRight: 40}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.meeting}           
                        keyExtractor={(item, index) => index.toString()}              
                        renderItem={({item}) =>  
                        <View style={styles.rectangleMeetingCard}>      
                            <Image 
                                style={{right: 6, width: 106, height: 100, opacity: 1}}
                                source={require('../assets/images/V_Meeting.png')}
                            />               
                            <Text style={{left: 110, bottom: 90, fontFamily: 'Poppins-Bold', fontSize: 16, color: '#262734'}}>
                                {item.name}
                            </Text>
                            <Text style={{left: 110, bottom: 90, fontFamily: 'Poppins-Medium', fontSize: 14}}>
                                {item.description}
                            </Text>                               
                            <Text style={{left: 110, bottom: 80, fontFamily: 'Poppins-Light', fontSize: 10}}>
                                {item.timestamp}
                            </Text>
                        </View>
                        }   
                    />

                    {/* View Meeting */}
                    {/* <View style={styles.rectangleMeetingCard}>
                        <Image 
                            style={{right: 6, width: 106, height: 100, opacity: 1}}
                            source={require('../assets/images/V_Meeting.png')}
                        />
                        <Text style={{left: 110, bottom: 90, fontFamily: 'Poppins-Bold', fontSize: 16, color: '#262734'}}>
                            {this.state.meeting.jenis_agenda}
                        </Text>
                        <Text style={{left: 110, bottom: 90, fontFamily: 'Poppins-Medium', fontSize: 14}}>
                            {this.state.meeting.judul_agenda}
                        </Text>                               
                        <Text style={{left: 110, bottom: 80, fontFamily: 'Poppins-Light', fontSize: 10}}>
                            {this.state.meeting.tgl_agenda}
                        </Text>
                    </View> */}

                    {/* Guideline */}
                    <Text style={styles.textGuidelineHeading}>Guideline</Text>   
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('FAQ')}>
                        <View style={styles.rectangleFAQ}>                                            
                            <View style={styles.ellipseOrnamentSmall}/>  
                            <Image 
                                style={{position: 'absolute', margin: -10, width: 85, height: 85}}                        
                                source={require('../assets/images/Icon_FAQ.png')}/> 
                            <Text 
                                style={{left: 90, fontFamily: 'Poppins-Bold', fontSize: 14, lineHeight: 21, color: '#262734'}}
                            >
                                    Frequently Asked Questions
                            </Text>                                                
                        </View>   
                    </TouchableWithoutFeedback>                 

                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Rules')}>
                        <View style={styles.rectangleRules}>
                            <View style={styles.ellipseOrnamentSmall}/>
                            <Image 
                                style={{position: 'absolute', top: -7, left: -15, width: 85, height: 85}}                        
                                source={require('../assets/images/Icon_Rules.png')}/>    
                            <Text 
                                style={{left: 90, fontFamily: 'Poppins-Bold', fontSize: 14, lineHeight: 21, color: '#262734'}}
                                >
                                    Omindtech Rules
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>                             
                    
                </View> 
            );
        }
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb'
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
    textNameHeading:{
        position: 'absolute',       
        left: 25,
        top: 83,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    iconProfilePicture:{
        position: 'absolute',
        width: 25,
        height: 25,
        left: 310,
        top: 81,
        borderRadius: 5,
        backgroundColor: '#099f84' 
    },
    rectangleEmployeeSummary:{
        position: 'absolute',
        width: 150,
        height: 100,
        left: 25,
        top: 121,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 0.7,
    },
    rectangleProjectStatus:{
        position: 'absolute',
        width: 150,
        height: 100,
        left: 185,
        top: 121,        
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 0.7,
    },
    textMeetingHeading:{
        position: 'absolute',
        left: 25,
        top: 241,        
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    rectangleMeetingCard:{
        // Delete this if use flatlist: 
        // position: 'absolute',
        // top: 269, 
        // left: 25,
        // ----------------------------
        marginRight: 10,
        width: 310,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 0.7,
    },
    textGuidelineHeading:{
        position: 'absolute',
        left: 25,
        top: 389,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    rectangleFAQ:{
        position: 'absolute',
        justifyContent: 'center',
        width: 310,
        height: 70,
        left: 25,
        top: 417,
        backgroundColor: '#fff',
        elevation: 0.7,
        borderRadius: 10
    },
    rectangleRules:{
        position: 'absolute',
        justifyContent: 'center',
        width: 310,
        height: 70,
        left: 25,
        top: 497,
        backgroundColor: '#fff',
        elevation: 0.7,
        borderRadius: 10
    },
    ellipseOrnamentSmall:{
        position: 'absolute',
        width: 70,
        height: 70,
        backgroundColor: '#099f84',
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10
    },
    ellipseOrnamentBig:{
        position: 'absolute',
        width: 110,
        height: 140,
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: 'rgba(9, 159, 132, 0.5)'
    },    
})