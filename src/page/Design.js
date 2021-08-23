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

export default class DesignScreen extends Component{
    constructor(props){
        super(props)
        this.state = { 
            design: [],
            isLoading: false,
        };
    }
    componentDidMount(){
        this.getDesign();
    }
    getDesign = async()=>{
        this.setState({isLoading: true})
        let token = await AsyncStorage.getItem('token');
        axios.get('http://hris.omindtech.id/api/employee-sum',{
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res=> {
            res = res.data;
            let temp_data = [];
            temp_data = res.data.filter(v=> v.divisi.id_role === 5)
            .map(
                v => {
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
            this.setState({
                design: temp_data,
                isLoading: false,
            })
        })  
        .catch(error => {
            // console.log(error.response.data);
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
                    <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Division')}}>
                        <View style={styles.rectangleBack}>
                            <Image
                                style={{position: 'absolute', width: 17, height: 17}}
                                source={require('../assets/images/arrow-back.png')}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Division')}>Design Division</Text>
                    {/* EMPloyee */}                
                    <FlatList
                        style={{top: 63, left: 25}}
                        contentContainerStyle={{paddingBottom: 95}}
                        showsVerticalScrollIndicator={false}
                        data={this.state.design}
                        keyExtractor={(item, index) => index.toString()}              
                        renderItem={({item}) =>
                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('DetailEmployee', item)}>
                            <View style={styles.rectangleEmployee}>
                                <View style={{top: 17.5, left: 10, width: 60, height: 60, backgroundColor: '#099f84', borderRadius: 50,}}>
                                    <Image 
                                        style={{width: 60, height: 60, borderRadius: 50}} 
                                        source={{uri: item.photo}}
                                    />
                                </View>
                                <Text style={{bottom: 30, left: 85, fontFamily: 'Poppins-Bold', fontSize: 14, color: '#262734'}}> 
                                    {item.name} 
                                </Text>
                                <Text style={{bottom: 35, left: 85, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#262734'}}> 
                                    {item.division}
                                </Text>
                                <Text style={{marginTop: -35, marginRight: 35, fontFamily: 'Poppins-Regular', fontSize: 10, alignSelf: 'flex-end'}}>Detail</Text>
                                <Image
                                    style={{width: 12, height: 12, marginTop: -15, alignSelf: 'flex-end', marginRight: 15}}
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
        height: 95,       
        borderRadius: 10, 
        elevation: 0.7,
    },
})