import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import axios from 'axios';
// import gambar ke objek
import bgimages from '../assets/images/V_Login.png';
import deviceStorage from '../services/DeviceStorage';

export default class LoginScreen extends Component{
    state={
        email:'',
        password:'',
        isSubmitting: false,
    };
    submit=()=>{
        this.setState({isSubmitting: true})
        let errors=[];
        if(this.state.email === ''){
            errors.push('Isi Email Terlebih Dahulu !');
        }

        if(this.state.password === ''){
            errors.push('Isi Password Terlebih Dahulu !');
        }

        let errors_msg='';
        errors.map(val=>{
            errors_msg += val + '\n';
        })

        if(errors.length > 0){
            Alert.alert(
                "Error!",
                errors_msg,
                [
                    {text: 'OK', onPress:()=>console.log('OK PRESS')}
                ],
                {cancelable:false}
            );
            this.setState({isSubmitting: false})
        }
        else {
            axios.post('http://6daa09deffa7.ngrok.io/api/login-ceo',
            {
                email: this.state.email,
                password: this.state.password,
            },
            ).then(res=>{
                deviceStorage.saveItem("token", res.data.token)
                this.props.navigation.navigate('Home')
                this.setState({isSubmitting: false})
                console.log(res);
            }, err=>{
                this.setState({isSubmitting: false})
                let e = err.response.data;
                let err_msg='';
                if(e.errors){
                    Object.entries(e.errors).forEach(
                        ([key, value]) =>{
                            err_msg+= value[0]+'\n';
                        }
                    );
                }
                else{
                    err_msg= e.message;
                }
                Alert.alert(
                    "Error!",
                    errors_msg,
                    [
                        {text: 'OK', onPress:()=>console.log('OK PRESS')}
                    ],
                    {cancelable:false}
                );
                console.log(err);
            }
            )
        }
    }
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.bgimagesStyle} source={bgimages} />
                <Text style={styles.title}>HRIS</Text>
                <Text style={styles.subtitle}>For Director</Text>
                <View style={styles.boxinput}>
                    <Text style={styles.textTitle} >Email</Text>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.inputText}
                        placeholder="email@omindtech.com"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onSubmitEditing={()=>this.password.focus}
                        value={this.state.email}
                        onChangeText={(val)=>{this.setState({email: val})}} />
                    </View>
                    <Text style={styles.textPass}>Password</Text>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#fff" 
                        secureTextEntry={true}
                        onChangeText={(val)=>{this.setState({password: val})}}
                        value={this.state.password}
                        ref={(input) => this.password = input}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonLogin} onPress={this.submit} disabled={this.state.isSubmitting} >
                        <Text style={styles.textButton} > {this.state.isSubmitting?'Signing In':'Sign In'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgimagesStyle:{
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: 330,
        top: 0
    },
    boxinput:{
        flexGrow: 1,
        width: '100%',
        height: 200,
        backgroundColor: '#099F84',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 10,
    },
    title:{
        fontSize: 72,
        color: '#f2f2f2',
        justifyContent: 'center',
        textAlign: 'center',
        textShadowRadius: 50,
        textShadowColor: '#262734',
        marginTop: 60,
        marginBottom: 0,
        fontFamily: 'Poppins-Black'
    },
    subtitle:{
        fontSize: 18,
        color: '#f2f2f2',
        justifyContent: 'center',
        textAlign: 'center',
        textShadowRadius: 50,
        textShadowColor: '#262734',
        fontFamily: 'Poppins-Black',
        marginTop: -40,
        marginBottom: 60
    },
    textTitle:{
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        marginTop: 30,
        marginBottom: 0,
        color: '#f2f2f2',
        alignItems: 'center',
        marginLeft: 80

    },
    textPass:{
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        marginBottom: 0,
        color: '#f2f2f2',
        alignItems: 'center',
        marginLeft: 80
    },
    inputText:{
        height: 50,
        color: 'white',
        alignItems: 'center',
        fontFamily: 'Poppins-Light'
    },
    inputEmail:{
        width: 229,
        backgroundColor: '#099F84',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        height: 35,
        marginTop: 0,
        marginBottom: 19,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginVertical: 10,
        alignSelf: 'center',
        

    },
    inputPass:{
        width: 229,
        backgroundColor: '#099F84',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        height: 30,
        marginBottom: 19,
        justifyContent: 'center',
        padding: 20,
        
    },
    buttonLogin:{
        width: 125,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#FBB03B',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textButton:{
        fontFamily: 'Poppins-Black',
        fontSize: 13,
        color: '#f2f2f2'

    }
})