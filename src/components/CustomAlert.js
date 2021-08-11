import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class RulesScreen extends Component{
    constructor(props){
        super(props);
        this.state = { 
            showAlert: false,
        };
    };
    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
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
        const {showAlert} = this.state;
        return(
            <View style={styles.container}>
                {/* <SkeletonPlaceholder>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{left: 25, marginTop: 75, width: 310, height: 105, borderRadius: 10}}/>  
                        <View style={{left: 25, marginTop: 40, width: 310, height: 30, borderRadius: 5}}/>
                        <View style={{left: 25, marginTop: 13, width: 310, height: 30, borderRadius: 5}}/>
                        <View style={{left: 25, marginTop: 13, width: 310, height: 30, borderRadius: 5}}/>
                        <View style={{left: 25, marginTop: 13, width: 310, height: 30, borderRadius: 5}}/>
                        <View style={{left: 25, marginTop: 13, width: 310, height: 30, borderRadius: 5}}/>
                        <View style={{alignSelf: 'center', marginTop: 13, width: 170, height: 25, borderRadius: 5}}/>
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
                {/* <Text>I'm AwesomeAlert</Text> */}
                <TouchableOpacity onPress={() => {
                    this.showAlert();
                }}>
                    <View style={styles.button}>
                    <Text style={styles.text}>test alert</Text>
                </View>
                </TouchableOpacity>
                <AwesomeAlert
                    contentContainerStyle={{
                        width: 310,
                        height: 389,
                        backgroundColor: '#099f84',
                        // background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
                        // box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
                        borderRadius: 10,
                       
                    }}
                    messageStyle={{
                        fontFamily: 'Poppins-Bold',
                        fontSize: 12,
                        color: '#fff',
                    }}
                    titleStyle={{
                        fontFamily: 'Poppins-Black',
                        fontSize: 36,
                        alignItems: 'center',
                        color: '#fff',
                    }}
                    customView={
                        <View style={{width: 50, height: 50, borderRadius: 50, backgroundColor: '#bb000e'}}>
                        </View>
                    }
                    confirmButtonStyle={{
                        borderRadius: 30,
                        width: 70,
                        height: 30,
                        alignItems: 'center',
                    }}
                    confirmButtonTextStyle={{
                        fontFamily: 'Poppins-Bold',
                        color: '#fff',
                    }}
                    show={showAlert}
                    showProgress={true}
                    title="January"
                    message="I have a message for you!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Okay"
                    confirmButtonColor="#f4997c"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
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