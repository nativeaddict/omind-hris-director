import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    StyleSheet,
    FlatList
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class DetailNotificationsScreen extends Component{ 
    constructor(props){
        super(props);
        this.state = { 
            notif: [],
            isLoading: false,
            error: null,
        }
    };
    componentDidMount(){
        this.getNotif();
    }
    getNotif = async ()=> {
        let token = await AsyncStorage.getItem('token');
        axios.get('http://47d5c6f6b873.ngrok.io/api/get-Notif-ceo', {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=> {
            res = res.data;
            this.setState({
                notif: res,
            })
            console.log('notif state', this.state.notif)
        })  
        .catch(error => this.setState({
            error,
            isLoading: false
        }))
    }
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#FFF', elevation: 0.7 }}> 
                <FlatList
                        contentContainerStyle={{paddingBottom: 1,}}
                        data={[
                            {
                                id: 'Notif1',
                                menuIcon: require('../assets/images/Icon_Mail.png'),
                                notifname: 'Sprint Retrospective',
                                status: 'Sprint 4 Retrospective Meeting',
                                date: 'Friday, July 16, 8:40 am',
                            },
                            {
                                id: 'Notif2',
                                menuIcon: require('../assets/images/Icon_Mail.png'),
                                notifname: 'Sprint Review',
                                status: 'Sprint 3 Review Meeting',
                                date: 'Friday, July 16, 8:40 am',
                            },
                            {
                                id: 'Notif3',
                                menuIcon: require('../assets/images/Icon_Mail.png'),
                                notifname: 'Sprint Planning',
                                status: 'Sprint 3 Planning Meeting',
                                date: 'Monday, June 28, 9:30 AM',
                            },
                            {
                                id: 'Notif4',
                                menuIcon: require('../assets/images/Icon_Mail.png'),
                                notifname: 'Pitching PT Infantry Sejahtera',
                                status: 'Status update for Infantry Mobile Apps',
                                date: 'Tuesday, June 22, 1:00 PM',
                            },
                            {
                                id: 'Notif5',
                                menuIcon: require('../assets/images/Icon_Mail.png'),
                                notifname: 'Sprint Retrospective',
                                status: 'Sprint 2 Retrospective Meeting',
                                date: 'Friday, June 11, 5:00 PM',
                            },
                            {
                                id: 'Notif6',
                                menuIcon: require('../assets/images/Icon_Mail.png'),
                                notifname: 'Sprint Review',
                                status: 'Sprint 2 Review Meeting',
                                date: 'Friday, June 11, 4:00 PM',
                            },
                            
                        ]}
                        renderItem={({item}) =>
                        <View style={{flexDirection: 'row', width: 310, height: 59.5, backgroundColor: '#fff', borderBottomColor: '#262734', borderBottomWidth: 0.3,}}>
                            <View style={{}}>
                                <Image style={{width: 50, height: 50, left: 10, marginRight: 10}} 
                                source={item.menuIcon} />
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{left: 16, fontFamily: 'Poppins-Bold', fontSize: 12, }}> {item.notifname} </Text>
                                <Text style={{left: 16, fontFamily: 'Poppins-Medium', fontSize: 10}}> {item.status} </Text>
                                <Text style={{left: 16, fontFamily: 'Poppins-Light', fontSize: 10}}> {item.date} </Text>
                            </View>
                        </View>
                        }
                        />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
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
    rectangleWhite:{
        flex: 1, 
        backgroundColor: '#FFFF', 
        width: 310, 
        height: 625, 
        elevation: 3, 
        left: 25 
    },  
    contentRectangle:{
        width: 290, 
        height: 140, 
        backgroundColor: '#F5F9FA', 
        marginBottom: 10 , 
        top: 14, 
        left: 10, 
        borderRadius: 10,
    },
    taskId:{
        fontFamily: 'Poppins-Medium', 
        fontSize: 10, 
        left: 10, 
        top: 7, 
        position: 'absolute'
    },
    images:{
        width: 90, 
        height: 90, 
        left: 6, 
        top: 25, 
        position: 'absolute'
    },
    taskDesc:{
        left: 100, 
        top: 51, 
        fontSize: 14, 
        fontFamily: 'Poppins-Bold', 
        position: 'absolute', 
        maxWidth: 170,
        height: 42
    },
    taskDeadline:{
        left: 100, 
        top: 94, 
        position: 'absolute', 
        fontFamily: 'Poppins-Light', 
        fontSize: 11
    },
    statusRectangle:{
        width: 89, 
        height: 15, 
        left: 7, 
        top: 117, 
        position:'absolute', 
        backgroundColor: 'pink', 
        alignItems: 'center', 
        borderRadius: 5
    },
    statusText:{
        fontFamily:'Poppins-Medium', 
        fontSize: 10
    },
})