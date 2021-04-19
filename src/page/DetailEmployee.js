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

export default class DetailEmployeeScreen extends Component{
    
    render(){
        // const{navigation} = this.props
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
                <View style={{top: 52, width: 75, height: 75, backgroundColor: '#fff', borderRadius: 50, alignSelf: 'center', elevation: 1.7, justifyContent: 'center'}}>                    
                    <Image 
                        style={{width: 75, height: 75}}
                        // bug photo
                        source={21}
                        // source={{uri: this.props.navigation.getParam('photo')}}
                    />                                     
                </View> 
                <View style={styles.rectangleDataProfile}>
                    <Text style={{top: 50, fontFamily: 'Poppins-Bold', fontSize: 14, textAlign: 'center', color: '#262734'}}>
                        {this.props.navigation.getParam('name')}
                    </Text>
                    <FlatList
                        ListFooterComponent={<View style={{height:90}}/>}
                        data={[
                            'Division', this.props.navigation.getParam('division'),
                            'Role', this.props.navigation.getParam('role'),
                            'Email', this.props.navigation.getParam('email'),
                            'Phone', this.props.navigation.getParam('phone'),
                            'Address', this.props.navigation.getParam('address'),
                            'Date of Birth', this.props.navigation.getParam('dateofbirth'),
                            'Social Media', this.props.navigation.getParam('socialmedia'),
                        ]}
                        renderItem = {({item}) => (
                            <View style={{flex: 1, top: 60, flexDirection: 'column', marginBottom: 5}}>                                
                                <Text style={{fontFamily: 'Poppins-Medium', marginLeft: 20, marginRight: 20, fontSize: 12}}>{item}</Text>
                            </View>                        
                        )}
                        numColumns = {2}
                        keyExtractor = {(item, index) => index}
                    />
                    <TouchableOpacity style={styles.buttonAttendanceRecap}>
                        <Text style={{fontFamily: 'Poppins-Bold',fontSize: 14, textAlign: 'center', color: '#fff'}}>Show Attendance Recap</Text>
                    </TouchableOpacity>
                </View>
                {/* Performance */}
                <Text style={styles.textPerformanceHeading}>Performance</Text>
                <TouchableWithoutFeedback onPress={()=>Alert.alert('Individual Objective')}>
                    <View style={styles.rectanglePerformance}>
                        <Text style={{alignSelf:'center', left: 25, fontFamily: 'Poppins-Medium', fontSize: 14, color: '#c4c4c4'}}>Final KPI Score</Text>
                        <Text style={{alignSelf: 'center', left: 130, fontFamily: 'Poppins-Bold', fontSize: 14, color: '#262734'}}>3.00</Text>
                        <Image
                            style={{bottom: 2, left: 145, width: 20, height: 20, alignSelf: 'center'}}
                            source={require('../assets/images/arrow-next2.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>
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
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        width: 270,
        height: 30,
        top: 295,        
        backgroundColor: '#099F84',
        borderRadius: 5,        
        elevation: 0.7
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