import React, { Component } from 'react';
import {
<<<<<<< Updated upstream
    View, 
    Text, 
    StyleSheet
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default class NotificationScreen extends Component{
    
    render(){
        return(            
            <View style={styles.container}>
                {/* <SkeletonPlaceholder>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{marginTop: 55, width: 75, height: 75, borderRadius: 75, alignSelf: 'center'}}/>
                        <View style={{marginTop: 15, width: 210, height: 30, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 15, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 5, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 5, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 5, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 5, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 5, width: 210, height: 20, borderRadius: 5, alignSelf: 'center'}}/>
                        <View style={{marginTop: 15, width: 270, height: 30, borderRadius: 10, alignSelf: 'center'}}/>
                        <View style={{marginTop: 20, width: 110, height: 25, borderRadius: 5, left: 25}}/>
                        <View style={{marginTop: 5, width: 310, height: 40, borderRadius: 10, left: 25}}/>
                    </View>
                </SkeletonPlaceholder>  */}
                <Text style={styles.textMenuNews} onPress={()=>this.props.navigation.navigate('News')}>News</Text>
                <View style={styles.selectionMenuHome}>
                    <Text style={styles.textMenuHome}>Home</Text>
                </View>
                <Text style={styles.textMenuNotification} onPress={()=>this.props.navigation.navigate('Notification')}>Notification</Text>                
            </View>
        );
    }
}
=======
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

>>>>>>> Stashed changes
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb',
    },
<<<<<<< Updated upstream
    textMenuNews: {
        position: 'absolute',
        left: 75,
        top: 22,       
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(38, 39, 52, 0.4)'
    },
    textMenuHome: {   
        bottom: 1.5,
        textAlign: 'center',
        color: '#fff',
=======
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
>>>>>>> Stashed changes
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21
    },
<<<<<<< Updated upstream
    textMenuNotification: {
        position: 'absolute',
        left: 240,
        top: 22,      
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(38, 39, 52, 0.4)'
    },
    selectionMenuHome:{
        position: 'absolute',
        width: 56,
        height: 16,
        left: 152,
        top: 24,
        backgroundColor: '#099f84',
        borderRadius: 50,
    },
})
=======
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
>>>>>>> Stashed changes
