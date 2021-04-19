import React, {Component} from 'react';
import {
    View, 
    Text,     
    Image,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';

export default class EmployeeSummaryScreen extends Component{
    render(){
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
                    // showsVerticalScrollIndicator={false}
                    data={[
                        {
                            id: 'EMP1',
                            photo: require('../assets/images/Photo_Reval.png'),
                            name: 'Reval Balpeer',
                            division: 'Production',
                            role: 'Junior Backend Developer',
                            email: 'reval@omind.com',
                            phone: '+62 81211223344',
                            address: 'Lodaya 47',
                            dateofbirth: '32 Februari 1978',
                            socialmedia: '@revalfahmi'
                        },
                        {
                            id: 'EMP2',
                            photo: require('../assets/images/Photo_Ragil.png'),
                            name: 'Ragil Ligar',
                            division: 'Production',
                            role: 'Junior Frontend Developer',
                            email: 'ragil@omind.com',
                            phone: '+62 81211223344',
                            address: 'Cilibende 47',
                            dateofbirth: '32 November 2005',
                            socialmedia: '@daruragilw'
                        },
                        {
                            id: 'EMP3',
                            photo: require('../assets/images/Photo_Barud.png'),
                            name: 'Ignatius Barud Tampubolon',
                            division: 'Production',
                            role: 'Junior Frontend Developer',
                            email: 'barid@omind.com',
                            phone: '+62 81211223344',
                            address: 'Malabar 47',
                            dateofbirth: '20 Juni 1945',
                            socialmedia: '@baridrais'
                        },
                        {
                            id: 'EMP4',
                            photo: require('../assets/images/Photo_Galih.png'),
                            name: 'Galih Palkor',
                            division: 'Production',
                            role: 'Senior Fullstack Developer',
                            email: 'galih@omind.com',
                            phone: '+62 81211223344',
                            address: 'Bogor Baru 47',
                            dateofbirth: '17 Mei 1935',
                            socialmedia: '@galihwisnup'
                        },
                        {
                            id: 'EMP5',
                            photo: require('../assets/images/Photo_Marsa.png'),
                            name: 'Marsa Gafhari',
                            division: 'Production',
                            role: 'Junior UI/UX Designer',
                            email: 'marsa@omind.com',
                            phone: '+62 81211223344',
                            address: 'Tegallega 47',
                            dateofbirth: '2 April 2000',
                            socialmedia: '@marsawafira'
                        },
                        {
                            id: 'EMP6',
                            photo: require('../assets/images/Photo_Pris.png'),
                            name: 'Vriswidodo Priambudi',
                            division: 'Production',
                            role: 'Junior UI/UX Designer',
                            email: 'vris@omind.com',
                            phone: '+62 81211223344',
                            address: 'Tegallega 47',
                            dateofbirth: '11 Oktober 2000',
                            socialmedia: '@vriskh'
                        },
                        {
                            id: 'EMP7',
                            photo: require('../assets/images/Photo_Asma.png'),
                            name: 'Asma Suarez',
                            division: 'Production',
                            role: 'Senior Fullstack Developer',
                            email: 'asma@omind.com',
                            phone: '+62 81211223344',
                            address: 'Artzimar 47',
                            dateofbirth: '11 Oktober 1985',
                            socialmedia: '@asmacayankabi'
                        },
                        {
                            id: 'EMP8',
                            photo: require('../assets/images/V_FAQ.png'),
                            name: 'Sirius Kuple',                            
                            division: 'Production',
                            role: 'Senior Fullstack Developer',
                            email: 'kuple@omind.com',
                            phone: '+62 81211223344',
                            address: 'Tegalgundil 47',
                            dateofbirth: '11 November 2000',
                            socialmedia: '@kupleee'
                        },
                        {
                            id: 'EMP9',
                            photo: require('../assets/images/V_FAQ.png'),
                            name: 'Severus Kucle',
                            division: 'Production',
                            role: 'Senior Fullstack Developer',
                            email: 'kucle@omind.com',
                            phone: '+62 81211223344',
                            address: 'Tegalgundil 47',
                            dateofbirth: '22 November 2001',
                            socialmedia: '@kucleee'
                        },                        
                    ]}
                renderItem={({item}) =>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('DetailEmployee', item)}>
                    <View style={styles.rectangleEmployee}>
                        <View style={{top: 17.5, left: 10, width: 60, height: 60, backgroundColor: '#099f84', borderRadius: 50,}}>
                            <Image 
                                style={{width: 60, height: 60,}} 
                                source={item.photo}
                            />
                        </View>
                        <Text style={{bottom: 30, left: 85, fontFamily: 'Poppins-Bold', fontSize: 14, color: '#262734'}}> 
                            {item.name} 
                        </Text>
                        <Text style={{bottom: 35, left: 85, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#262734'}}> 
                            {item.role}
                        </Text>
                    </View>                    
                </TouchableWithoutFeedback>                
                }
                />               
            </View>
        );
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