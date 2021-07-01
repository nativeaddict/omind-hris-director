import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    TouchableWithoutFeedback,
    ScrollView,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { Table, Row, Rows } from 'react-native-table-component';

export default class AttendanceRecapScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            tableHead: ['Date', 'Clock In', 'Clock Out', 'Feeling', 'Status'],
            tableData: [['1','2','3','4','5']]
        };
    }
    
    componentDidMount(){
        this.getEmployeePresenceHistory();
    }
    getEmployeePresenceHistory = async() => {
        let id = this.props.navigation.state.params.id;
        console.log('id', id);
        let token = await AsyncStorage.getItem('token');
        axios.get(`http://6daa09deffa7.ngrok.io/api/attendance-recap/${id}`, {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res=>{
            res = res.data;
            let temp_data = [];
            temp_data = res.data.map(v=>{
                return[
                     v.tanggal,
                     v.tap_in,
                     v.tap_out,
                     v.feel,
                     v.status
                ]
            });
            console.log(temp_data);
            this.setState({
                dataPresence: temp_data,
                isLoading: false
            });
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
        const {dataPresence} = this.state;
        return(
            <View style={styles.container}>
                 {/* Navbar */}
                 <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('DetailEmployee')}}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{position: 'absolute', width: 17, height: 17}}
                            source={require('../assets/images/arrow-back.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('DetailEmployee')}>{this.props.navigation.state.params.name}'s Attendance</Text>
                {/* Name */}
                {/* <Text style={styles.textNameHeading}>Employee Name</Text> */}
                <ScrollView style={{flex:0.1, top: 70, width: 310, alignSelf: 'center'}}>   
                    <Table borderStyle={{borderWidth: 2, borderColor: '#f5f9fa', width: 310}}>
                        <Row data={this.state.tableHead} style={styles.headRow} textStyle={styles.textHead}/>
                        <Rows data={dataPresence} textStyle={styles.textData}/>
                    </Table>
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
    textNameHeading:{
        position: 'absolute',
        left: 25,
        top: 74,
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        lineHeight: 18,
        color: '#262734'        
    },
    headRow: { 
        height: 40, 
        backgroundColor: '#099f84', 
        borderRadius: 5 
    },
    textHead:{
        margin: 6, 
        fontFamily: 'Poppins-Medium', 
        fontSize: 10,
        color: '#fff'
    },
    textData: { 
        margin: 6, 
        fontFamily: 'Poppins-Medium', 
        fontSize: 10,
        color: '#262734'
    }
})