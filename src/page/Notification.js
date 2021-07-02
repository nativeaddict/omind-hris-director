import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    FlatList,
    Image,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const NotifRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#FFF', elevation: 0.7 }}> 
        <FlatList
                contentContainerStyle={{paddingBottom: 1,}}
                data={[
                    {
                        id: 'Notif1',
                        menuIcon: require('../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Morning Meeting Routine',
                        date: 'Sunday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif2',
                        menuIcon: require('../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Morning Meeting Routine',
                        date: 'Sunday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif3',
                        menuIcon: require('../assets/images/Icon_Mail.png'),
                        notifname: 'Sprint Retrospective Meeting',
                        status: 'Your Presence Success',
                        date: 'Saturday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif4',
                        menuIcon: require('../assets/images/Icon_Mail.png'),
                        notifname: 'Sprint Retrospective Meeting',
                        status: 'Your Presence Success',
                        date: 'Saturday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif5',
                        menuIcon: require('../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Your Presence Success',
                        date: 'Friday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif6',
                        menuIcon: require('../assets/images/Icon_Mail.png'),
                        notifname: 'Sprint Retrospective Meeting',
                        status: 'Your Presence Success',
                        date: 'Saturday, February 10, 8:40 am',
                    },
                    
                ]}
                renderItem={({item}) =>
                <View style={{flexDirection: 'row', width: 310, height: 59.5, backgroundColor: '#fff', borderBottomColor: '#262734', borderBottomWidth: 0.3,}}>
                    <View style={{}}>
                        <Image style={{width: 50, height: 50, left: 10, marginRight: 10}} 
                        source={item.menuIcon} />
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{left: 16, fontFamily: 'Poppins-Bold', fontSize: 12, }}> {item.notifname} </Text>
                        <Text style={{left: 16, fontFamily: 'Poppins-Medium', fontSize: 10}}> {item.status} </Text>
                        <Text style={{left: 16, fontFamily: 'Poppins-Light', fontSize: 10}}> {item.date} </Text>
                    </View>
                </View>
                }
                />
    </View>
  );
  
const renderTabBar = props => (
    <TabBar
      {...props} 
      labelStyle={{fontFamily: 'Poppins-Bold', color: '#262734'}}   
      indicatorStyle={{ backgroundColor: '#ffff', }}
      style={{ backgroundColor: 'grey', marginTop: 20, justifyContent: 'center', elevation: 3, width: 310, borderTopLeftRadius: 20, borderTopRightRadius: 20, fontFamily: 'Poppins-Bold', fontSize: 12}}
    />
  );

  export default function TabViewExample({ navigation }) {

    const layout = useWindowDimensions();
  
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'notif', title: 'Notification' },
    ]);
  
    const renderScene = SceneMap({
      notif: NotifRoute,
    });

    return (
        <View style={styles.container}>
            <View style={{flex: 0.1}}>
                {/* Navbar */}
                <Text style={styles.textMenuActivity} onPress={() => navigation.navigate('News')}>News</Text>
                <Text style={styles.textMenuHome} onPress={()=>navigation.navigate('Home')}>Home</Text>
                <View style={styles.selectionMenuNotification}>
                    <Text style={styles.textMenuNotification} onPress={()=>navigation.navigate('Notification')} >Notification</Text>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <TabView
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb',
    },
    textMenuActivity:{      
        position: 'absolute',
        left: 55,
        top : 22,
        color: 'rgba(38, 39, 52, 0.4)',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21
    },
    textMenuHome:{
        position: 'absolute',
        left: 158,
        top : 22,
        color: 'rgba(38, 39, 52, 0.4)',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21
    },
    textMenuNotification:{     
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: '#f9f9fb',
        textAlign: 'center',
    },
    selectionMenuNotification:{
        justifyContent: 'center',
        position: 'absolute',
        width: 98,
        height: 16,
        left: 237,
        top: 25,
        backgroundColor: '#099f84',
        borderRadius: 50,
    },
});