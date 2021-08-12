import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    FlatList,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import SkeletonDetailEmployee from '../components/SkeletonDetailEmployee';

export default class DetailEmployeeScreen extends Component{
    constructor(props){
        super(props)

        let {params} = props.navigation.state;
        this.state = { 
            kpi: [],
            isLoading: false,
            params: [
                {
                    Name: params.name,
                    Id: params.id,
                    Division: params.division,
                    Email: params.email,
                    Phone: params.phone,
                    Address: params.address,
                    Dateofbirth: params.dateofbirth,
                    Socialmedia: params.socialmedia,
                    Photo: params.photo
                }  
            ]
        };
    }
    componentDidMount(){
        this.getEmployeeKPI();
    }
    getEmployeeKPI = async()=>{
        this.setState({isLoading: true})
        let id = this.props.navigation.state.params.id;
        let token = await AsyncStorage.getItem('token');
        axios.get(`http://hris.omindtech.id/api/kpi-employee/${id}`,{
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res=> {
            res = res.data;
            this.setState({
                kpi: res,
                isLoading: false,
            })
        })  
        .catch(error => {
            this.setState({
                error,
                isLoading: false
            })
        });
    }
    render(){
        if(this.state.isLoading){
            return <SkeletonDetailEmployee/>
        }
        else{
            return(
                <View style={styles.container}>
                    {/* Navbar */}
                    <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('EmployeeSummary')}}>
                        <View style={styles.rectangleBack}>
                            <Image
                                style={{position: 'absolute', width: 17, height: 17}}
                                source={require('../assets/images/arrow-back.png')}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('EmployeeSummary')}>Employee Profile</Text>
                    {/* Profile */}
                    <View style={{top: 50, width: 75, height: 75, backgroundColor: '#fff', borderRadius: 50, alignSelf: 'center', elevation: 1.7, justifyContent: 'center'}}>                    
                        <Image 
                            style={{width: 75, height: 75, borderRadius: 75}}
                            source={{uri: this.props.navigation.getParam('photo')}}
                        />                                     
                    </View> 
                    <View style={styles.rectangleDataProfile}>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18, textAlign: 'center', color: '#262734', marginTop: 55}}>
                            {this.props.navigation.getParam('name')}
                        </Text>
                        <FlatList
                            ListFooterComponent={<View style={{height:90}}/>}
                            showsVerticalScrollIndicator={false}
                            style={{marginTop: 15}}
                            data={this.state.params}
                            renderItem = {({item}) => {
                                return <>
                                    <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                                        <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 5}}>
                                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12}}>Division{'\t'}</Text>
                                            <Text style={{marginLeft: 20, fontFamily: 'Poppins-Regular', fontSize: 12}}>{item.Division}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 5}}>
                                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12}}>Email{'\t'}{'\t'}</Text>
                                            <Text style={{marginLeft: 20, fontFamily: 'Poppins-Regular', fontSize: 12}}>{item.Email}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 5}}>
                                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12}}>Phone{'\t'}{'\t'}</Text>
                                            <Text style={{marginLeft: 20, fontFamily: 'Poppins-Regular', fontSize: 12}}>{item.Phone}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 5}}>
                                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12}}>Address{'\t'}</Text>
                                            <Text style={{marginLeft: 20, fontFamily: 'Poppins-Regular', fontSize: 12}}>{item.Address}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 5}}>
                                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12}}>Date of Birth{'\t'}</Text>
                                            <Text style={{marginLeft: 20, fontFamily: 'Poppins-Regular', fontSize: 12}}>{item.Dateofbirth}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 5}}>
                                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12}}>Social Media{'\t'}</Text>
                                            <Text style={{marginLeft: 20, fontFamily: 'Poppins-Regular', fontSize: 12}}>{item.Socialmedia}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity 
                                        style={styles.buttonAttendanceRecap}
                                        onPress={()=>this.props.navigation.navigate('AttendanceRecap', {name: item.Name, id: item.Id})}
                                        >                                 
                                            <Text style={{fontFamily: 'Poppins-Bold',fontSize: 14, textAlign: 'center', color: '#fff'}}>Show Attendance Recap</Text>
                                    </TouchableOpacity>
                                    
                                </>
                            }}
                            // numColumns = {2}
                            keyExtractor = {(item, index) => index}
                        />
                    </View>
                    {/* Performance */}
                    <Text style={styles.textPerformanceHeading}>Performance</Text>
                    <TouchableWithoutFeedback onPress={()=>Alert.alert(`${this.props.navigation.state.params.name}`, `KPI Score: ${this.state.kpi.kpi}`)}>
                        <View style={styles.rectanglePerformance}>
                            <Text style={{alignSelf:'center', left: 25, fontFamily: 'Poppins-Medium', fontSize: 14, color: '#c4c4c4'}}>Final KPI Score</Text>
                            <Text style={{alignSelf: 'center', left: 130, fontFamily: 'Poppins-Bold', fontSize: 14, color: '#262734'}}>{this.state.kpi.kpi}</Text>
                            <Image
                                style={{bottom: 2, marginLeft: 145, width: 20, height: 20, alignSelf: 'center'}}
                                source={require('../assets/images/arrow-next2.png')}
                            />
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
    rectangleDataProfile:{
        position: 'absolute',
        width: 310,
        height: 350,
        left: 25,
        top: 82,
        backgroundColor: '#fff',
        borderRadius: 10,    
        elevation: 0.7    
    },
    buttonAttendanceRecap:{
        // position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        width: 270,
        height: 30,
        marginHorizontal: 20,
        marginTop: 20,
        flex: 1,
        // top: 295,        
        backgroundColor: '#099F84',
        borderRadius: 5,        
        // elevation: 0.7
    },
    textPerformanceHeading:{
        position: 'absolute',
        left: 25,
        top: 440,        
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    rectanglePerformance:{
        flexDirection: 'row',
        position: 'absolute',
        width: 310,
        height: 40,
        left: 25,
        top: 470,        
        backgroundColor: '#fff',
        borderRadius: 10,       
        elevation: 0.7 
    }
})