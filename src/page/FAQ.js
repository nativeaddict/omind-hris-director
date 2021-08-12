import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import { Accordion } from 'native-base';

const dataArray = [
    { title: "Where i can see my salary?", content: "You can go to Home Screen, scroll to Payslip " },
    { title: "How to use presence feature?", content: "You can go to Home Screen, click the presence menu" },
    { title: "How is the KPI calculation system?", content: "KPI " },
    { title: "Can i change my salary?", content: "No u can't, but you can tell to" },
    { title: "Does my salary is real?", content: "Yes, of course it is!" },
    { title: "Can i change my biodata?", content: "No, only admin or Human Resource can edit your biodata" },
    { title: "How can i take my task?", content: "You can go to Project Screen to choose the project then you can take your task to next step" },
    { title: "Where i can see my task report?", content: "You can go to Target Screen, that screen contain your summary your task in a month" },
  ];
export default class FAQScreen extends Component{
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
                 {/* Navbar */}
                 <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Home')}}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{position: 'absolute', width: 17, height: 17}}
                            source={require('../assets/images/arrow-back.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>FAQ</Text>
                {/* FAQ */}
                <Text style={styles.textFAQHeading}>Frequently Asked Questions</Text>
                <Image 
                    style={{width: 50, height: 50, left: 257, top: 51}}
                    source={require('../assets/images/V_FAQ.png')}
                /> 
                <View style={{top: 85, left:25, width: 310, borderRadius: 10, backfaceVisibility: 'hidden'}}>
                    <Accordion renderHeader={this._renderHeader} renderContent={this._renderContent} dataArray={dataArray} expanded={[0]}/>
                </View>                
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
    textFAQHeading:{
        position: 'absolute',       
        left: 25,
        top: 68,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,    
        color: '#262734'
    },
})