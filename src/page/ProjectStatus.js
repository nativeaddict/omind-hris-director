import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import SkeletonProjectStatus from '../components/SkeletonProjectStatus';

export default class ProjectStatusScreen extends Component{
    constructor(props){
        super(props)
        this.state = { 
            project: [],
            isLoading: false,
        };
    }
    componentDidMount(){
        this.getProject();
    }
    getProject = async()=>{
        this.setState({isLoading: true})
        let token = await AsyncStorage.getItem('token');
        axios.get('http://hris.omindtech.id/api/project-all',{
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res=> {
            res = res.data;
            let temp_data = [];
            temp_data = res.data.map(v => {
                return{
                    id: v.id,
                    client: v.nama_mitra,
                    name: v.nama_project,
                    type: v.jenis_project,
                    duedate: v.akhir_pengerjaan,
                }
            })
            this.setState({
                project: temp_data,
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
            return<SkeletonProjectStatus/>
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
                    <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Project Status</Text>
                    {/* List Project */}
                    <FlatList
                        style={{top: 76, left: 25}}
                        contentContainerStyle={{paddingBottom: 95}}
                        showsVerticalScrollIndicator={false}
                        data={this.state.project}
                        renderItem={({item}) =>
                            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('DetailProject', item)}>
                                <View style={styles.RectangleContent}>
                                    <View style={styles.RectangleCompany}>
                                        <Text style={{marginLeft: 3, fontFamily:'Poppins-Bold', fontSize: 12, color: '#fff'}}>{item.client}</Text>
                                    </View>
                                    <Text style={{marginLeft: 15, marginTop: 3, color: '#262734', fontSize: 18, fontFamily: 'Poppins-Medium'}}>{item.name}</Text>
                                    <Text style={{marginLeft: 15, marginTop: -5, fontFamily: 'Poppins-Regular', color: '#262734', fontSize: 10}}>Due date {item.duedate}</Text>
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
        elevation: 0.7, 
        marginBottom: 10
    },
    companyName:{
        fontFamily: 'Poppins-Medium', 
        fontSize: 12, 
        textAlign: 'center'
    },
    RectangleCompany:{
        alignContent: 'center',
        width: 150, 
        height: 17, 
        top: 10, 
        marginLeft: 15, 
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