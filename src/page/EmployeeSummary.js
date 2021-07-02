import React, {Component} from 'react';
import {
    View, 
    Text,     
    Image,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import SkeletonEmployeeSummary from '../components/SkeletonEmployeeSummary';

export default class EmployeeSummaryScreen extends Component{
    constructor(props){
        super(props)
        this.state = { 
            employee: [],
            isLoading: false,
        };
    }
    componentDidMount(){
        this.getEmployee();
    }
    getEmployee = async()=>{
        this.setState({isLoading: true})
        let token = await AsyncStorage.getItem('token');
        axios.get('http://42bbbe79c5e3.ngrok.io/api/employee-sum',{
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
                    photo: v.foto,
                    name: v.nama,
                    email: v.email,
                    phone: v.no_hp,
                    address: v.alamat,
                    dateofbirth: v.tgl_lahir,
                    socialmedia: v.instagram,
                    division: v.divisi.posisi,
                }
            })
            console.log('employee', temp_data);
            this.setState({
                employee: temp_data,
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
            return<SkeletonEmployeeSummary/>
        }
        else{
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
                    <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Employee Summary</Text>
                    {/* EMPloyee */}                
                    <FlatList
                        style={{top: 63, left: 25}}
                        contentContainerStyle={{paddingBottom: 95}}
                        showsVerticalScrollIndicator={false}
                        data={this.state.employee}
                        keyExtractor={(item, index) => index.toString()}              
                        renderItem={({item}) =>
                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('DetailEmployee', item)}>
                            <View style={styles.rectangleEmployee}>
                                <View style={{top: 17.5, left: 10, width: 60, height: 60, backgroundColor: '#099f84', borderRadius: 50,}}>
                                    <Image 
                                        style={{width: 60, height: 60, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
                                        source={{uri: item.photo}}
                                    />
                                </View>
                                <Text style={{bottom: 30, left: 85, fontFamily: 'Poppins-Bold', fontSize: 14, color: '#262734'}}> 
                                    {item.name} 
                                </Text>
                                <Text style={{bottom: 35, left: 85, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#262734'}}> 
                                    {item.division}
                                </Text>
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
        width: 310,
        height: 95,       
        borderRadius: 10, 
        elevation: 0.7,
    },
})