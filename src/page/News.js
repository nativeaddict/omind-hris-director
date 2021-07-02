import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import SkeletonNews from '../components/SkeletonNews';

export default class NewsScreen extends Component{
    constructor(props){
        super(props);
        this.state = { 
            news: [],
            isLoading: false,
        };
    }
    componentDidMount(){
        this.getNews();
    }
    getNews = async()=> {
        this.setState({isLoading: true})
        let token = await AsyncStorage.getItem('token');
        axios.get('http://42bbbe79c5e3.ngrok.io/api/get-news', {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            res = res.data;
            let temp_data = [];
            temp_data = res.data.map(v=>{
                return{
                    id: v.id,
                    photo: v.ava_berita,
                    title: v.judul_berita,
                    content: v.isi_berita,
                    date: v.tgl_post
                }
            });
            console.log(temp_data);
            this.setState({
                news: temp_data.reverse(),
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
    render(){
        if(this.state.isLoading){
            return<SkeletonNews/>
        }
        else{
            return(
                <View style={styles.container}>
                    {/* Navbar */}
                    <View style={styles.selectionMenuNews}>
                        <Text style={styles.textMenuNews}>News</Text>
                    </View>
                    <Text style={styles.textMenuHome} onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                    <Text style={styles.textMenuNotification} onPress={()=>this.props.navigation.navigate('Notification')}>Notification</Text>
                    {/* News Flatlist */}
                    <Text style={{position: 'absolute', fontFamily:'Poppins-Bold', fontSize: 16, left: 25, top: 71}}>Up to date for you!</Text>
                    <FlatList
                    style={{left: 25, top: 71}}
                    contentContainerStyle={{paddingBottom: 100}}
                    data={this.state.news}
                    renderItem={({item}) =>
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('NewsContent1', item)}>
                        <View style={styles.rectangleContent}>
                            <Image                         
                                style={{position: 'absolute', width: 90, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 50, borderBottomLeftRadius: 10, borderBottomRightRadius: 50}} 
                                source={{uri: item.photo}} 
                            />   
                            <View style={{width: 90, height: 100, borderBottomEndRadius: 50, borderTopEndRadius: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10, backgroundColor: 'rgba(9, 159, 132, 0.5)'}}/>
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 99, top: -85, marginBottom: 2}}> {item.title} </Text>
                            <Text style={{maxHeight: 15, maxWidth: 150, fontSize: 10, fontFamily: 'Poppins-Medium', left: 102, top: -85, marginBottom: 16}}>{item.content}</Text>
                            <Text style={{fontSize: 10, fontFamily: 'Poppins-Light', left: 99, top: -90, }}> {item.date} </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    }
                />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb',
        // justifyContent: 'center'
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
        marginTop: 10,
        width: 310,
        height: 100,
        elevation: 0.7,
        borderRadius: 10,
        resizeMode: 'center'
    },
    contentContainer:{
        width: 310, 
        height: 100, 
        backgroundColor: '#fff', 
        left: 25, 
        top: 10, 
        marginBottom: 10, 
        elevation: 0.7, 
        borderRadius: 10
    },
    newsPhoto:{
        width: 90, 
        height: 100, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 50, 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 50
    },
    newsTitle:{
        fontFamily: 'Poppins-Bold', 
        fontSize: 14, 
        left: 99, 
        top: -85, 
        marginBottom: 2
    },
    newsContent:{
        fontSize: 10, 
        fontFamily: 'Poppins-Medium', 
        left: 99, 
        top: -85, 
        marginBottom: 16
    },
    newsDate:{
        fontSize: 10, 
        fontFamily: 'Poppins-Light', 
        left: 99, 
        top: -90,
    },
    newsDetail:{
        fontSize: 10, 
        fontFamily: 'Poppins-Medium', 
        left: 245, 
        top: -107
    },
    detailIcon:{
        width: 11, 
        height: 11, 
        left: 285, 
        top: -122 
    },
    textMenuNews: {     
        bottom: 1.5,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: '#fff'
    },
    textMenuHome: {   
        top: 22,
        textAlign: 'center',
        color: 'rgba(38, 39, 52, 0.4)',
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
    selectionMenuNews:{
        position: 'absolute',
        width: 56,
        height: 16,
        left: 75,
        top: 24,
        backgroundColor: '#099f84',
        borderRadius: 50,
    },
})
