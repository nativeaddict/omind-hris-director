import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {Accordion} from 'native-base';

const dataArray = [
    { title: "Work Hour", content: "Work admission time at this company starts at 9 O'clock am and finished at 6 O'clock pm in Monday until Friday"},
    { title: "Payroll System", content: "Payroll system at this company uses Monthly Payroll" },
    { title: "Reward for Employes", content: "The company will give reward to employees who have good performance every years" },
    { title: "How to dress for work", content: "Dress rule in this company is to dress freely as long as polite" },
    { title: "Presence in and out", content: "Employees must do clock in and clock out attendancece on time " },
    { title: "Overtime Work", content: "The overtime work rule in this company is twelve days in a year" }
  ];
export default class RulesScreen extends Component{
    constructor(props){
        super(props);
    };
   
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
                 <View style={styles.rectangleBack}>
                    <Image
                        style={{position: 'absolute', width: 17, height: 17}}
                        source={require('../assets/images/arrow-back.png')}
                    />                    
                </View>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Rules</Text>
               
                
                <Text style={{left: 25, top: 68, fontFamily: 'Poppins-Bold', fontSize: 16, position: 'absolute'}}> OmindTech Rules </Text>

                <View style={{top: 96, left:25, width: 310, borderRadius: 10, backfaceVisibility: 'hidden', position: 'absolute'}}>
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
    button: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#AEDEF4",
      },
    text: {
        color: '#fff',
        fontSize: 15
    },
})