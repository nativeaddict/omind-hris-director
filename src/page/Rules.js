import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    StyleSheet
} from 'react-native';
import {Accordion} from 'native-base';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const dataArray = [
    { title: "Regulations to fellow employees ", content: "Respect and appreciate to other employee" },
    { title: "Entry time regulator", content: "Lorem ipsum dolor sit amet" },
    { title: "Rules during the office", content: "Lorem ipsum dolor sit amet" },
    { title: "Lorem ipsum dolor sir amet", content: "Lorem ipsum dolor sit amet" },
    { title: "Lorem ipsum dolor sir amet", content: "Lorem ipsum dolor sit amet" },
    { title: "Lorem ipsum dolor sir amet", content: "Lorem ipsum dolor sit amet" }
];

export default class RulesScreen extends Component{
    _renderHeader(item, expanded) {
        return (
            <View style={{
                borderRadius: 10,
                flexDirection: "row",
                padding: 10,
                marginTop: 10,
                justifyContent: "space-between",
                alignItems: "center" ,
                backgroundColor: "#fff" }}>
                    <Text style={{fontFamily: 'Poppins-Medium', color: '#262734'}}>
                         {" "}{item.title}
                    </Text>
                {expanded
                ? <Image style={{width: 25, height: 25}} source={require('../assets/images/arrow-up.png')}/>
                : <Image style={{width: 25, height: 25}} source={require('../assets/images/arrow-down.png')}/>}
          </View>
        );
      }
      _renderContent(item) {
        return (
            <Text
                style={{
                borderRadius: 10,
                backgroundColor: "#f5f9fa",
                padding: 10,
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                color: '#262734'
            }}
            >
                {item.content}
            </Text>
        );
      }
    render(){
        return(
            <View style={styles.container}>
                {/* <SkeletonPlaceholder>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{left: 25, marginTop: 76, width: 310, height: 70, borderRadius: 10}}/>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <View style={{left: 25, width: 90, height: 90, borderRadius: 10}}/>
                            <View style={{left: 45, width: 90, height: 90, borderRadius: 10}}/>
                            <View style={{left: 65, width: 90, height: 90, borderRadius: 10}}/>
                        </View>   
                        <View style={{left: 25, marginTop: 20, width: 310, height: 30, borderRadius: 10}}/>
                        <View style={{left: 25, marginTop: 10, width: 310, height: 30, borderRadius: 10}}/>
                        <View style={{left: 25, marginTop: 10, width: 310, height: 30, borderRadius: 10}}/>
                        <View style={{left: 25, marginTop: 10, width: 310, height: 30, borderRadius: 10}}/>
                    </View>
                </SkeletonPlaceholder>  */}
                 {/* Navbar */}
                 <View style={styles.rectangleBack}>
                    <Image
                        style={{position: 'absolute', width: 17, height: 17}}
                        source={require('../assets/images/arrow-back.png')}
                    />                    
                </View>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Rules</Text>
                
                {/* <Text style={{left: 25, top: 68, fontFamily: 'Poppins-Bold', fontSize: 16, position: 'absolute'}}> OmindTech Rules </Text> */}

                {/* <View style={{top: 96, left:25, width: 310, borderRadius: 10, backfaceVisibility: 'hidden', position: 'absolute'}}>
                    <Accordion renderHeader={this._renderHeader} renderContent={this._renderContent} dataArray={dataArray} expanded={[0]}/>
                </View>  */}
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
})