import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import SkeletonDetailProject from '../components/SkeletonDetailProject';

export default class DetailProjectScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            detail: [],
            pending: [],
            ongoing: [],
            review: [],
            completed: [],
            isLoading: false,
            error: null,
        }
    }
    componentDidMount(){
        this.getDetail();
        this.getPending();
    }
    getDetail = async () =>{ 
        this.setState({isLoading: true})
        let id = this.props.navigation.state.params.id
        console.log(id);
        let token = await AsyncStorage.getItem('token')
        axios.get(`http://42bbbe79c5e3.ngrok.io/api/detail-project/${id}`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=> {
            res = res.data;
            console.log(res);
            this.setState({
                detail: res,
                isLoading: false,
            })
        })  
        .catch(error => {
            console.log(error.response.data);
            this.setState({
                error,
                isLoading: false
            })
        });
    }
    getPending = async () => {
        this.setState({isLoading: true})
        let id = this.props.navigation.state.params.id
        let token = await AsyncStorage.getItem('token')
        axios.get(`http://42bbbe79c5e3.ngrok.io/api/status-Task-Ceo/${id}`, {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=> {
            res = res.data;
            console.log('status task', res);
            let temp_data = [];
            temp_data = res.data.filter(v=> v.status_progres === 'Pending')
            .map(
                v=> {
                    return{
                        desc: v.deskripsi,
                        status: v.status,
                        duedate: v.deadline,
                    }
                }
            )
            this.setState({
                pending: temp_data,
                isLoading: false,
            })
            console.log('pending', this.state.pending)
        })  
        .catch(error => {
            console.log(error.response.data);
            this.setState({
                error,
                isLoading: false
            })
        });
    }
    render(){
        if(this.state.isLoading){
            return <SkeletonDetailProject />
        }
        else{
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
                    <View style={{width: 310, height: 70, left: 25, top: 76, position: 'absolute', backgroundColor: '#FFF', elevation: 0.7, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginBottom: 20 }}>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 24, textAlign: 'center'}}>{this.props.navigation.getParam('client')}</Text>
                    </View>

                    {/* Content Rectangle */}
                    <View style={{width: 310, height: 90, backgroundColor: '#f9f9fb', left: 25,  top: 166, position: 'absolute'}}>
                        <View style={{width: 90, height: 90, backgroundColor: '#FFFFFF', position: 'absolute', borderRadius: 10, elevation: 2}}>
                            <Image  source={require('../assets/images/Icon_TotalTask.png')}
                                    style={{width: 30, height: 30, top: 9, left: 6, position: 'absolute'}} />
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 48, color: '#C4C4C4', position: 'absolute'}}>Total Task</Text>
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 64, position: 'absolute'}}>{this.state.detail.totalTask}</Text>
                        </View>
                        <View style={{width: 90, height: 90, left: 110, backgroundColor: '#FFFFFF',position: 'absolute', borderRadius: 10, elevation: 2 }}>
                            <Image  source={require('../assets/images/Icon_Progress.png')}
                                    style={{width: 30, height: 30, top: 9, left: 6, position: 'absolute'}} />
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 48, color: '#C4C4C4', position: 'absolute'}}>Progress</Text>
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 64, position: 'absolute'}}>{this.state.detail.progress}%</Text>
                        </View>
                        <View style={{width: 90, height: 90, marginLeft: 220, backgroundColor: '#FFFFFF',position: 'absolute',  borderRadius: 10, elevation: 2}}>
                            <Image  source={require('../assets/images/Icon_Teams.png')}
                                    style={{width: 30, height: 30, top: 9, left: 6, position: 'absolute'}} />
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 48, color: '#C4C4C4', position: 'absolute'}}>Teams</Text>
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 6, top: 64, position: 'absolute'}}>{this.state.detail.team}</Text>
                        </View>
                    </View>

                    {/* Status Rectangle */}
                    <View style={{width: 310, height: 150, left: 25, top: 276, position: 'absolute', backgroundColor: '#f9f9fb'}}>
                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Pending')}>
                            <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', elevation: 0.7, borderRadius: 10}}> 
                                <View style={{width: 10, height: 10, left: 11, top: 10, position :'absolute', backgroundColor: '#F15A25', borderRadius: 40}}></View>
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 34, top: 5, position: 'absolute'}}>Pending</Text>
                                <View style={{width: 12, height: 12, left: 283, top: 10, backgroundColor: '#099F84', borderRadius: 40, position: 'absolute'}}></View>
                                <Image  source={require('../assets/images/arrow-next.png')} 
                                        style={{width: 8, height: 12, left: 284.5, top: 9.5}} />
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Ongoing')}>
                            <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', top: 40, elevation: 0.7, borderRadius: 10}}> 
                                <View style={{width: 10, height: 10, left: 11, top: 10, position :'absolute', backgroundColor: '#FBB03B', borderRadius: 40}}></View>
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 34, top: 5, position: 'absolute'}}>Ongoing</Text>
                                <View style={{width: 12, height: 12, left: 283, top: 10, backgroundColor: '#099F84', borderRadius: 40, position: 'absolute'}}></View>
                                <Image  source={require('../assets/images/arrow-next.png')} 
                                        style={{width: 8, height: 12, left: 284.5, top: 9.5}} />
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Review')}>
                            <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', top: 80, elevation: 0.7, borderRadius: 10}}> 
                                <View style={{width: 10, height: 10, left: 11, top: 10, position :'absolute', backgroundColor: '#054FFF', borderRadius: 40}}></View>
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 34, top: 5, position: 'absolute'}}>Review</Text>
                                <View style={{width: 12, height: 12, left: 283, top: 10, backgroundColor: '#099F84', borderRadius: 40, position: 'absolute'}}></View>
                                <Image  source={require('../assets/images/arrow-next.png')} 
                                        style={{width: 8, height: 12, left: 284.5, top: 9.5}} />
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Complete')}>
                            <View style={{width: 310, height: 30, backgroundColor: '#FFF', position: 'absolute', top: 120, elevation: 0.7, borderRadius: 10}}> 
                                <View style={{width: 10, height: 10, left: 11, top: 10, position :'absolute', backgroundColor: '#099F84', borderRadius: 40}}></View>
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 34, top: 5, position: 'absolute'}}>Complete</Text>
                                <View style={{width: 12, height: 12, left: 283, top: 10, backgroundColor: '#099F84', borderRadius: 40, position: 'absolute'}}></View>
                                <Image  source={require('../assets/images/arrow-next.png')} 
                                        style={{width: 8, height: 12, left: 284.5, top: 9.5}} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    
                </View>
            );
        }
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