import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('News')}>Details News</Text>

                {/* News Tittle */}
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 25, top: 71}}>Emergency Covid19</Text>

                <FlatList
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
                />
                
                {/* <ScrollView style={{flex: 1}}>
                    <View style={{width: 310, height: 1000, left: 25, top: 99, backgroundColor: 'brown', borderTopLeftRadius: 10, borderTopRightRadius: 10,}}>
                        
                        <View style={{width: 310, height:157, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: 'blue'}}>
                            <Text style={{fontSize: 30, fontFamily: 'Poppins-Bold', textAlign: 'center'}}>INI GAMBAR BERITANYA</Text>
                        </View>

                        <Text>INI ISI BERITANYA</Text>
                    </View>
                </ScrollView> */}
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