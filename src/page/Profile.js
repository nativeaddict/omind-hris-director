import React, { Component } from 'react';
import {
    View, 
    Image, 
    Text, 
    TouchableOpacity, 
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios';

export default class ProfileScreen extends Component{
    constructor(props){
        super(props);
        this.state = { 
            users: [],
            isLoading: false,
        };
    };
    componentDidMount(){
        this.getUser();
    }
    getUser = async () => {
        this.setState({isLoading: true})
        let token = await AsyncStorage.getItem('token');
        axios.get('http://42bbbe79c5e3.ngrok.io/api/profile-ceo', {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(async(res)=>{
            res = res.data;
            console.log(res);
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
    render(){
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Profile</Text>

                {/* RectangleBio */}
                <View style={styles.BioRectangle}>
                    {/* PhotoProfile */}
                    <View style={styles.PhotoProf}>
                        <Image 
                            style={{width: 70, height: 70}}
                            source={{urii: this.state.users.foto}} 
                        />
                    </View>
                {/* ProfileName */}
                <Text style={styles.ProfileName}>{this.state.users.nama}</Text>
                
                {/* ProfileRole */}
                <Text style={styles.ProfileRole}>{this.state.users.divisi?.posisi}</Text>
                </View>

                {/* RectangleContent */}
                <View style={styles.RectangleContent}>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6 }}>
                         <Text style={styles.TextLeft}>Name</Text>
                         <Text style={[styles.TextRight,{paddingRight: 45}]}>{this.state.users.nama}</Text>
                    </View>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6}}>
                         <Text style={styles.TextLeft}>Email</Text>
                         <Text style={[styles.TextRight,{paddingRight: 18}]}>{this.state.users.email}</Text>
                    </View>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6}}>
                         <Text style={styles.TextLeft}>Phone</Text>
                         <Text style={[styles.TextRight,{paddingRight: 45}]}>{this.state.users.no_hp}</Text>
                    </View>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6}}>
                         <Text style={styles.TextLeft}>Date of Birth</Text>
                         <Text style={[styles.TextRight,{paddingRight: 53}]}>{this.state.users.tgl_lahir}</Text>
                    </View>
                    <View style={{width: 310, height: 30, backgroundColor: '#FFF', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#262734',borderBottomWidth: 0.6}}>
                         <Text style={styles.TextLeft}>Address</Text>
                         <Text style={[styles.TextRight,{paddingRight: 33}]}>{this.state.users.alamat}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{top: 450, left: 96, width: 169, height: 26, borderRadius: 5, backgroundColor: '#099f84', position: 'absolute',alignItems: 'center'}}
                    onPress={()=>{
                        AsyncStorage.removeItem('token')
                        this.props.navigation.replace('Login')
                    }}
                >
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, alignItems: 'center', textAlign: 'center', color: '#FFF'}}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
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
    BioRectangle:{
        width: 310, 
        height: 102, 
        left: 25, 
        top: 75, 
        backgroundColor: '#FFF', 
        borderRadius: 10, 
        position: 'absolute',
        elevation: 3
    },
    PhotoProf:{
        backgroundColor: '#099F84', 
        borderRadius: 40, 
        width: 70, 
        height: 70, 
        left: 18, 
        top: 16,
    },  
    ProfileName:{
        fontFamily: 'Poppins-Bold', 
        fontSize: 14, 
        left:128 , 
        top: -40
    },
    ProfileRole:{
        fontSize: 14, 
        fontFamily: 'Poppins-Medium', 
        left: 102, 
        top: -45
    },
    RectangleContent:{
        backgroundColor: '#FFF', 
        width: 310, 
        height: 199, 
        left: 25, 
        top: 216, 
        position: 'absolute', 
        elevation: 0.7,
        borderRadius: 10
    },
    TextLeft:{
        top: 8, 
        fontFamily: 'Poppins-Medium', 
        fontSize: 13, 
        paddingLeft: 5
    },
    TextRight:{
        top: 8, 
        fontFamily: 'Poppins-Medium', 
        fontSize: 13, 
        
    },
})