import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    FlatList,
} from 'react-native';

export default class NewsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* Navbar */}
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Home')}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{width: 17, height: 17, position: 'absolute'}}
                            source={require('../assets/images/arrow-back.png')}
                        />                    
                    </View>
                </TouchableWithoutFeedback>               
                {/* Title Text */}
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>News</Text>

                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 25, top: 71}}>Up to date for you!</Text>

                {/* News Flatlist */}
                <FlatList
                style={{left: 25, top: 71}}
                contentContainerStyle={{paddingBottom: 100,}}
                data={[
                    {
                        id: 'NewsContent1',
                        newsPhoto: require('../assets/images/NewsPhoto1.png'),
                        newsTitle: 'Emergency Covid19',
                        newsContent: 'Lorem Ipsum ...',
                        newsdate: 'Februari 01, 2021 06:30 WIB',
                        newsDetails: 'Details',
                        detailsIcon: require('../assets/images/arrow-next.png'),
                    },
                    {
                        id: 'NewsContent2',
                        newsPhoto: require('../assets/images/Test-BannerImageNews.png'),
                        newsTitle: 'Emergency Covid19',
                        newsContent: 'Lorem Ipsum ...',
                        newsdate: 'Februari 01, 2021 06:30 WIB',
                        newsDetails: 'Details',
                        detailsIcon: require('../assets/images/arrow-next.png'),
                    },
                    {
                        id: 'NewsContent3',
                        newsPhoto: require('../assets/images/NewsPhoto1.png'),
                        newsTitle: 'Emergency Covid19',
                        newsContent: 'Lorem Ipsum ...',
                        newsdate: 'Februari 01, 2021 06:30 WIB',
                        newsDetails: 'Details',
                        detailsIcon: require('../assets/images/arrow-next.png'),
                    },
                    {
                        id: 'NewsContent4',
                        newsPhoto: require('../assets/images/Test-BannerImageNews.png'),
                        newsTitle: 'Emergency Covid19',
                        newsContent: 'Lorem Ipsum ...',
                        newsdate: 'Februari 01, 2021 06:30 WIB',
                        newsDetails: 'Details',
                        detailsIcon: require('../assets/images/arrow-next.png'),
                    },
                    {
                        id: 'NewsContent5',
                        newsPhoto: require('../assets/images/NewsPhoto1.png'),
                        newsTitle: 'Emergency Covid19',
                        newsContent: 'Lorem Ipsum ...',
                        newsdate: 'Februari 01, 2021 06:30 WIB',
                        newsDetails: 'Details',
                        detailsIcon: require('../assets/images/arrow-next.png'),
                    },
                    {
                        id: 'NewsContent6',
                        newsPhoto: require('../assets/images/Test-BannerImageNews.png'),
                        newsTitle: 'Emergency Covid19',
                        newsContent: 'Lorem Ipsum ...',
                        newsdate: 'Februari 01, 2021 06:30 WIB',
                        newsDetails: 'Details',
                        detailsIcon: require('../assets/images/arrow-next.png'),
                    },
                    
                ]}
                renderItem={({item}) =>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate(item.id)}>
                    <View style={styles.rectangleContent}>
                        <Image style={{width: 90, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 50, borderBottomLeftRadius: 10, borderBottomRightRadius: 50}} 
                        source={item.newsPhoto} />
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 99, top: -85, marginBottom: 2}}> {item.newsTitle} </Text>
                        <Text style={{fontSize: 10, fontFamily: 'Poppins-Medium', left: 99, top: -85, marginBottom: 16}}> {item.newsContent} </Text>
                        <Text style={{fontSize: 10, fontFamily: 'Poppins-Light', left: 99, top: -90, }}> {item.newsdate} </Text>
                        <Text style={styles.newsDetail}> {item.newsDetails} </Text>
                        <Image style={{width: 11, height: 11, left: 285, top: -122 }} 
                        source={item.detailsIcon} />
                    </View>
                </TouchableWithoutFeedback>
                }
            />
            </View>
        );
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
        margin: 5,
        width: 310,
        height: 100,
        elevation: 3,
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
        elevation: 3, 
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
})
