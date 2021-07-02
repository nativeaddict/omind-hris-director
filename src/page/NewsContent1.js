import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    FlatList,
} from 'react-native';

export default class NewsContent1Screen extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* Navbar */}
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('News')}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{width: 17, height: 17, position: 'absolute'}}
                            source={require('../assets/images/arrow-back.png')}
                        />                    
                    </View>
                </TouchableWithoutFeedback>               
                {/* Title Text */}
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('News')}>News - {this.props.navigation.getParam('title')}</Text>

                {/* News Title */}
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 25, top: 71}}>{this.props.navigation.getParam('title')}</Text>
                <Image 
                    style={{alignSelf: 'center', width: 310, height: 100, top: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                    source={{uri: this.props.navigation.getParam('photo')}}
                />
                <Text style={{left: 25, maxWidth: 310, top: 200, fontFamily: 'Poppins-Medium', color: '#262734', fontSize: 12}}>{this.props.navigation.getParam('content')}</Text>
                {/* <FlatList
                    style={{left: 25, top: 75}}
                    contentContainerStyle={{paddingBottom: 100,}}
                    data={[
                        {
                            id: 'NewsContent',
                            newsPhoto: require('../assets/images/V_Login.png'),
                            newsContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
                            author: 'Penulis : Daru Marojahan'
                        },
                        
                    ]}
                    renderItem={({item}) =>
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('News')}>
                        <View style={styles.rectangleContent}>
                            <View>
                                <Image style={{width: 310, height: 157, borderTopLeftRadius: 10, borderTopRightRadius: 10, marginBottom: 100}} 
                                source={item.newsPhoto} />
                            </View>
                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, top: -85, marginBottom: 70, textAlign: 'justify'}}> {item.newsContent} </Text>
                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, top: -85, textAlign: 'right'}}>{item.author}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    }
                /> */}
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
        height: 650,
        elevation: 0.7,
        borderRadius: 10,
        // resizeMode: 'center'
    },
});